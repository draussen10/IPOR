export {
    ArticleDetailsPageAsync as ArticleDetailsPage
} from './ui/ArticleDetailsPage/ActicleDetailsPageAsync';

export type {ArticleDetailsCommentsSchema} from './model/types/ArticleDetailsCommentsSchema';
export type {ArticleDetailsPageRecommendationsSchema} from './model/types/ArticleDetailsPageRecommendationsSchema';
export type {ArticleDetailsPageSchema} from './model/types/index';

export {articleDetailsCommentsReducer} from './model/slice/articleDetailsCommentsSlice';
export {articleDetailsPageRecommendationsReducer} from './model/slice/articleDetailsPageRecommendationsSlice';
