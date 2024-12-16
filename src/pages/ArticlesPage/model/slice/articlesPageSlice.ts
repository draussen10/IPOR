import {createEntityAdapter, createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type StateSchema} from 'app/providers/StoreProvider';
import {type Article, ArticleType, ArticleView} from 'entities/Article';
import {type ArticlesPageSchema} from '../types/articlesPageSchema';
import {fetchArticlesList} from '../../model/services/fetchArticlesList/fetchArticlesList';
import {ARTICLES_VIEW_LOCALSTORAGE_KEY} from 'shared/const/localsStorage';
import {ArticleSortField} from 'entities/Article/model/types/article';
import {type SortOrder} from 'shared/types';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: article => article.id
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: false,
        order: 'asc',
        search: '',
        sort: ArticleSortField.TITLE,
        _inited: false,
        limit: 4,
        type: ArticleType.ALL
    }),
    reducers: {
        initState: state => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView || ArticleView.SMALL;
            state.view = view;
            state.limit = view === ArticleView.SMALL ? 9 : 4;
            state._inited = true;
        },
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
});

export const {actions: articlesPageActions} = articlesPageSlice;
export const {reducer: articlesPageReducer} = articlesPageSlice;
