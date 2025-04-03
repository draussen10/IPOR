import {createAsyncThunk} from '@reduxjs/toolkit';
import {getUserAuthData} from '@/entities/User';
import {type ThunkOptions} from '@/app/providers/StoreProvider';
import {getArticleDetailsData} from '@/entities/Article';
import {fetchCommentsByArticleId} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkOptions<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {extra, dispatch, getState, rejectWithValue} = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
