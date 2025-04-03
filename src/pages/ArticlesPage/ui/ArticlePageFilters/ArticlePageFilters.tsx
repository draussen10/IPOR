import {type FC, memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch';
import {useTranslation} from 'react-i18next';
import styles from './ArticlePageFilters.m.scss';
import {useSelector} from 'react-redux';
import {
    getArticlePageView,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort
} from '../../model/selectors/articlesPageSelector';
import {
    type ArticleView,
    ArticleViewSelector,
    type ArticleSortField,
    ArticleTypeTabs
} from '@/entities/Article';
import {articlesPageActions} from '../../model/slice/articlesPageSlice';
import {Card} from '@/shared/ui/Card/Card';
import {Input} from '@/shared/ui/Input/Input';
import {ArticleSortSelect} from '@/entities/Article';
import {type SortOrder} from '@/shared/types';
import {fetchArticlesList} from '../../model/services/fetchArticlesList/fetchArticlesList';
import {useDebounce} from '@/shared/lib/hooks/useDebounce';
import {VStack} from '@/shared/ui/Stack';

interface ArticlePageFiltersProps {
    className?: string
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const {className} = props;

    const view = useSelector(getArticlePageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticlesList({replace: true}));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticlesList({replace: true}));
    }, [dispatch]);

    const debouncedFetchArticlesList = useDebounce(async () => await dispatch(fetchArticlesList({replace: true})), 500);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchArticlesList();
    }, [debouncedFetchArticlesList, dispatch]);

    return (
        <VStack gap="8" max className={classNames(styles.articlePageFilters, {}, [className])}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelect
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={styles.search}>
                <Input placeholder={t('Search by...')} value={search} onChange={onChangeSearch} />
            </Card>
            <ArticleTypeTabs className={styles.tabs} />
        </VStack>
    );
});
