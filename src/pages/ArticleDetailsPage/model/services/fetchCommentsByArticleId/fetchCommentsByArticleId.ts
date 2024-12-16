import {createAsyncThunk} from '@reduxjs/toolkit';
import {type ThunkOptions} from 'app/providers/StoreProvider';
import {type Comment} from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkOptions<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        if (!articleId) {
            throw new Error();
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
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
