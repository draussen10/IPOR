import {createAsyncThunk} from '@reduxjs/toolkit';
import {type ThunkOptions} from 'app/providers/StoreProvider';
import {type Article, ArticleType} from 'entities/Article';
import {
    getArticlePageLimit,
    getArticlePageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType
} from '../../selectors/articlesPageSelector';
import {addQueryParams} from 'shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
Article[],
FetchArticlesListProps,
ThunkOptions<string>
>(
    'articlesPage/fetchArticlesList',
    async ({replace}, thunkAPI) => {
        const {extra, getState, rejectWithValue} = thunkAPI;

        const page = getArticlePageNum(getState());
        const limit = getArticlePageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({sort, order, type, q: search});

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    type: type === ArticleType.ALL ? undefined : type,
                    q: search
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
