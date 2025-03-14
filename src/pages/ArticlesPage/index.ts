export {
    ArticlesPageAsync as ArticlesPage
} from './ui/ArticlesPage/ActiclesPageAsync';

export type {ArticlesPageSchema} from './model/types/articlesPageSchema';

export {articlesPageActions} from './model/slice/articlesPageSlice';
export {fetchArticlesList} from './model/services/fetchArticlesList/fetchArticlesList';
export {getArticlesPageType} from './model/selectors/articlesPageSelector';
