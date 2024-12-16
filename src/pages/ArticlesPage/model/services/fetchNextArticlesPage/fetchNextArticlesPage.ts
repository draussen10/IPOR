import {createAsyncThunk} from '@reduxjs/toolkit';
import {type ThunkOptions} from 'app/providers/StoreProvider';
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNum
} from '../../selectors/articlesPageSelector';
import {fetchArticlesList} from '../fetchArticlesList/fetchArticlesList';
import {articlesPageActions} from '../../slice/articlesPageSlice';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkOptions<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const {getState, dispatch} = thunkAPI;
        const hasMore = getArticlePageHasMore(getState());
        const isLoading = getArticlePageIsLoading(getState());
        const page = getArticlePageNum(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({replace: false}));
        }
    }
);
