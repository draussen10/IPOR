import {type FC, memo, useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.m.scss';
import {type ReducerList, useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';
import {articlesPageReducer} from '../../model/slice/articlesPageSlice';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {Page} from 'widgets/Page/Page';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {ArticlePageFilters} from '../ArticlePageFilters/ArticlePageFilters';
import {useSearchParams} from 'react-router-dom';
import {ArticleInfiniteList} from '../ArticleInfiniteList/ArticleInfiniteList';
import {VStack} from 'shared/ui/Stack';

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

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(initArticlesPage(searchParams));
        }
    }, [dispatch, searchParams]);

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(styles.articlesPage, {}, [className])}
        >
            <VStack gap="8" max>
                <ArticlePageFilters/>
                <ArticleInfiniteList />
            </VStack>
        </Page>
    );
};

export default memo(ArticlesPage);
