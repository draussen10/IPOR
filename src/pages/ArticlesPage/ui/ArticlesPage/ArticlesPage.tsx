import {type FC, memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss';
import {type ReducerList, useReducerManager} from '@/shared/lib/hooks/useReducerManager';
import {articlesPageReducer} from '../../model/slice/articlesPageSlice';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch';
import {Page} from '@/widgets/Page';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {ArticlePageFilters} from '../ArticlePageFilters/ArticlePageFilters';
import {useSearchParams} from 'react-router-dom';
import {ArticleInfiniteList} from '../ArticleInfiniteList/ArticleInfiniteList';
import {VStack} from '@/shared/ui/Stack';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const {className} = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    useReducerManager(reducers, false);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(styles.articlesPage, {}, [className])}
        >
            <VStack gap="32" max>
                <ArticlePageFilters/>
                <ArticleInfiniteList />
            </VStack>
        </Page>
    );
};

export default memo(ArticlesPage);
