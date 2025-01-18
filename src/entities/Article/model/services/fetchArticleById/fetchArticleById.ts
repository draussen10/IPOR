import {createAsyncThunk} from '@reduxjs/toolkit';
import {type ThunkOptions} from 'app/providers/StoreProvider';
import {type Article} from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkOptions<string>>(
    'articleDetails/fetchArticlesById',
    async (articleId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        if (!articleId) {
            throw new Error();
        }

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user'
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);
