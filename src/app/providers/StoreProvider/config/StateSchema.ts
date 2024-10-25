import {type EnhancedStore} from '@reduxjs/toolkit';
import {type CounterSchema} from 'entities/Counter';
import {type UserSchema} from 'entities/User';
import {type LoginSchema} from 'features/AuthByUsername';
import {type ReducerManager} from './reducerManager';
import {type ProfileSchema} from 'entities/Profile';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // async
    loginForm?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
