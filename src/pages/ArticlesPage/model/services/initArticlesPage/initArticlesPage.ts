import {createAsyncThunk} from '@reduxjs/toolkit';
import {type ThunkOptions} from 'app/providers/StoreProvider';
import {articlesPageActions} from '../../slice/articlesPageSlice';
import {fetchArticlesList} from '../fetchArticlesList/fetchArticlesList';
import {getArticlesPageInited} from '../../selectors/articlesPageSelector';
import {type SortOrder} from 'shared/types';
import {type ArticleSortField, type ArticleType} from 'entities/Article';

export const initArticlesPage = createAsyncThunk<
void,
URLSearchParams,
ThunkOptions<string>
>(
    'articleDetails/initArticlesPage',
    async (urlSearchParams, thunkAPI) => {
        const {getState, dispatch} = thunkAPI;

        const _inited = getArticlesPageInited(getState());

        if (!_inited) {
            const orderFromUrl = urlSearchParams.get('order') as SortOrder;
            const sortFromUrl = urlSearchParams.get('sort') as ArticleSortField;
            const typeFromUrl = urlSearchParams.get('type') as ArticleType;
            const searchFromUrl = urlSearchParams.get('q');

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }

            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl));
            }

            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }

            if (typeFromUrl) {
                dispatch(articlesPageActions.setType(typeFromUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({replace: false}));
        }
    }
);
