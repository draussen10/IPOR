import {type StoryFn} from '@storybook/react';
import {type StateSchema, StoreProvider} from 'app/providers/StoreProvider';
import {type ReducersMapObject} from '@reduxjs/toolkit';
import {loginReducer} from 'features/AuthByUsername';
import {profileReducer} from 'entities/Profile';
import {type ReducerList} from 'app/providers/StoreProvider/lib/useReducerManager';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{...asyncReducers, ...defaultAsyncReducers}}
    >
        <StoryComponent />
    </StoreProvider>
);
