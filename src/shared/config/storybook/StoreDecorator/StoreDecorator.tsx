import {type StoryFn} from '@storybook/react';
import {type StateSchema, StoreProvider} from '@/app/providers/StoreProvider';
import {type ReducerList} from '@/app/providers/StoreProvider/lib/useReducerManager';
import {loginReducer} from '@/features/AuthByUsername/testing';
import {profileReducer} from '@/features/editableProfileCard/testing';
import {articleDetailsReducer} from '@/entities/Article/testing';
import {addCommentFormReducer} from '@/features/addCommentForm/testing';
import {articleDetailsPageReducer} from '@/pages/ArticleDetailsPage/testing';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
) => (StoryComponent: StoryFn) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{...asyncReducers, ...defaultAsyncReducers}}
    >
        <StoryComponent />
    </StoreProvider>
);
