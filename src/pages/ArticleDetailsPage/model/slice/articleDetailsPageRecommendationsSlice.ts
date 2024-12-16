import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {type ArticleDetailsPageRecommendationsSchema} from '../types/ArticleDetailsPageRecommendationsSchema';
import {type StateSchema} from 'app/providers/StoreProvider';
import {type Article} from 'entities/Article';
import {
    fetchArticleRecommendations
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: article => article.id
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
        isLoading: false,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
});

export const {actions: articleDetailsPageRecommendationsActions} = articleDetailsPageRecommendationsSlice;
export const {reducer: articleDetailsPageRecommendationsReducer} = articleDetailsPageRecommendationsSlice;
