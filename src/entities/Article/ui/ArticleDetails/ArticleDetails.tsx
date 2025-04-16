import {type FC, memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './ArticleDetails.module.scss';
import {Text, TextAlign, TextSize} from '@/shared/ui/Text/Text';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';
import {Avatar} from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import {Icon} from '@/shared/ui/Icon/Icon';
import {type ArticleBlock, ArticleBlockType} from '../../model/types/article';
import {ArticleBlockTextComponent} from '../ArticleBlockTextComponent/ArticleBlockTextComponent';
import {ArticleBlockCodeComponent} from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent';
import {ArticleBlockImageComponent} from '../ArticleBlockImageComponent/ArticleBlockImageComponent';
import {useSelector} from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectrors/getArticleDetails';
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch';
import {type ReducerList, useReducerManager} from '@/shared/lib/hooks/useReducerManager';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import {VStack} from '@/shared/ui/Stack';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect';

interface ArticleDetailsProps {
    className?: string
    articleId: string
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    const {
        className,
        articleId
    } = props;

    useReducerManager(reducers, true);

    useInitialEffect(() => {
        dispatch(fetchArticleById(articleId));
    });

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return <ArticleBlockTextComponent key={block.id} className={styles.block} block={block} />;
            case ArticleBlockType.CODE:
                return <ArticleBlockCodeComponent key={block.id} className={styles.block} block={block} />;
            case ArticleBlockType.IMAGE:
                return <ArticleBlockImageComponent key={block.id} className={styles.block} block={block} />;
            default:
                return null;
        }
    }, []);

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            {isLoading && (
                <>
                    <Skeleton className={styles.avatar} width={200} height={200} borderRadius={'50%'} />
                    <Skeleton className={styles.title} width={300} height={24} />
                    <Skeleton className={styles.skeleton} width={600} height={24} />
                    <Skeleton className={styles.skeleton} width={'100%'} height={200} />
                    <Skeleton className={styles.skeleton} width={'100%'} height={400} />
                    <Skeleton className={styles.skeleton} width={'100%'} height={200} />
                </>
            )}

            {error && (
                <Text
                    title={t('articleLoadingError')}
                    align={TextAlign.CENTER}
                />
            )}

            {data && (
                <>
                    <div className={styles.avatar} >
                        <Avatar src={data.img} size={200} />
                    </div>

                    <Text
                        title={data.title}
                        text={data.subtitle}
                        size={TextSize.L}
                    />

                    <div className={styles.articleInfo}>
                        <Icon Svg={EyeIcon} className={styles.icon} />
                        <Text text={String(data.views)} size={TextSize.L} />
                    </div>

                    <div className={styles.articleInfo}>
                        <Icon Svg={CalendarIcon} className={styles.icon} />
                        <Text text={data.createdAt} size={TextSize.L} />
                    </div>

                    {data.blocks.map(renderBlock)}
                </>
            )}
        </VStack>
    );
});
