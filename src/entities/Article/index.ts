export {ArticleDetails} from './ui/ArticleDetails/ArticleDetails';
export {
    type Article,
    ArticleBlockType,
    ArticleType
} from './model/types/article';
export type {ArticleDetailsSchema} from './model/types/articleDetailsSchema';
export {getArticleDetailsData} from './model/selectrors/getArticleDetails';

export {
    articleDetailsReducer
} from './model/slice/articleDetailsSlice';
