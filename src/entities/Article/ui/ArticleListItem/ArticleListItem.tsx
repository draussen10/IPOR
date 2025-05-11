import {type FC, type HTMLAttributeAnchorTarget, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './ArticleListItem.module.scss';
import {Text} from '@/shared/ui/Text';
import {type Article, ArticleBlockType, type ArticleTextBlock, ArticleView} from '../../model/types/article';
import {Icon} from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import {Card} from '@/shared/ui/Card';
import {Avatar} from '@/shared/ui/Avatar';
import {Button} from '@/shared/ui/Button';
import {ArticleBlockTextComponent} from '../ArticleBlockTextComponent/ArticleBlockTextComponent';
import {getRouteArticleDetails} from '@/shared/const/router';
import {AppLink} from '@/shared/ui/AppLink';
import {AppImage} from '@/shared/ui/AppImage';
import {Skeleton} from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const {t} = useTranslation();
    const {
        className,
        article,
        view,
        target
    } = props;

    const types = <Text text={article.type.join(', ')} className={styles.types} />;

    const views = (<>
        <Text text={String(article.views)} className={styles.views} />
        <Icon Svg={EyeIcon} />
    </>);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
                <Card>
                    <div className={styles.header}>
                        {article.user.avatar && <Avatar src={article.user.avatar} size={30} />}
                        <Text text={article.user.username} className={styles.username} />
                        <Text text={article.createdAt} className={styles.date} />
                    </div>
                    <Text title={article.title} className={styles.title} />
                    {types}
                    <AppImage
                        src={article.img}
                        className={styles.image}
                        alt={article.title}
                        fallback={<Skeleton width='100%' height={250} />}
                    />
                    {textBlock && <ArticleBlockTextComponent block={textBlock} className={styles.textBlock} />}
                    <div className={styles.footer}>
                        <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                            <Button>{t('readMore')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(styles.articleListItem, {}, [className, styles[view]])}
        >
            <Card>
                <div className={styles.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={article.img}
                        alt={article.title}
                        className={styles.img}
                    />
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={styles.title} />
            </Card>
        </AppLink>
    );
});
