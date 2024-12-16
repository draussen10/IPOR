import {type StateSchema} from 'app/providers/StoreProvider';
import {ArticleSortField, ArticleType, ArticleView} from 'entities/Article';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error || '';
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore || false;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited || false;
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.TITLE;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';

export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
