import {type StateSchema} from '@/app/providers/StoreProvider';

export const getArticleDetailsPageRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;

export const getArticleDetailsPageRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;
