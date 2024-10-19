import {type EnhancedStore} from '@reduxjs/toolkit';
import {type CounterSchema} from 'entities/Counter';
import {type UserSchema} from 'entities/User';
import {type LoginSchema} from 'features/AuthByUsername';
import {type ReducerManager} from './reducerManager';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
