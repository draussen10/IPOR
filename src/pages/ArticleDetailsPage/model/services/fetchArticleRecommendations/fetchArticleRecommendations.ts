import {createAsyncThunk} from '@reduxjs/toolkit';
import {type ThunkOptions} from 'app/providers/StoreProvider';
import {type Article} from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
Article[],
void,
ThunkOptions<string>
>(
    'articlesPage/fetchArticleRecommendations',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: 4
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
