import {combineReducers} from '@reduxjs/toolkit';
import {
    articleDetailsPageRecommendationsReducer
} from './articleDetailsPageRecommendationsSlice';
import {
    articleDetailsCommentsReducer
} from './articleDetailsCommentsSlice';
import {type ArticleDetailsPageSchema} from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer
});
