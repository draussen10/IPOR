import {type StoryFn} from '@storybook/react';
import {type StateSchema, StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername';
import {profileReducer} from 'features/editableProfileCard';
import {type ReducerList} from 'app/providers/StoreProvider/lib/useReducerManager';
import {articleDetailsReducer} from 'entities/Article';
import {addCommentFormReducer} from 'features/addCommentForm';
import {articleDetailsPageReducer} from 'pages/ArticleDetailsPage';

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
