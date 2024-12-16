import {type FC, memo, useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.m.scss';
import {ArticleList} from 'entities/Article';
import {type ReducerList, useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';
import {articlesPageReducer, getArticles} from '../../model/slice/articlesPageSlice';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView
} from '../../model/selectors/articlesPageSelector';
import {Page} from 'widgets/Page/Page';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {Text, TextAlign} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import {ArticlePageFilters} from 'pages/ArticlesPage/ui/ArticlePageFilters/ArticlePageFilters';
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const {className} = props;
    const dispatch = useAppDispatch();
    const {t} = useTranslation('pages/articles');
    const [searchParams] = useSearchParams();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);

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

    if (error) {
        return (
            <Text title={t('ArticlesPageTextError')} align={TextAlign.CENTER} />
        );
    }

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(styles.articlesPage, {}, [className])}
        >
            <ArticlePageFilters/>
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
                className={styles.list}
            />
        </Page>
    );
};

export default memo(ArticlesPage);
