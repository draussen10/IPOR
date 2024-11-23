import {type StoryFn} from '@storybook/react';
import {type StateSchema, StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername';
import {profileReducer} from 'entities/Profile';
import {type ReducerList} from 'app/providers/StoreProvider/lib/useReducerManager';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer
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
