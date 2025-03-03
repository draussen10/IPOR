import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {type ArticleDetailsCommentsSchema} from '../types/ArticleDetailsCommentsSchema';
import {type Comment} from 'entities/Comment';
import {type StateSchema} from 'app/providers/StoreProvider';
import {
    fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: comment => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
});

export const {actions: articleDetailsCommentsActions} = articleDetailsCommentsSlice;
export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice;
