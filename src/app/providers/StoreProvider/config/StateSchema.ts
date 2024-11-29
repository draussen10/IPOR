import {type EnhancedStore} from '@reduxjs/toolkit';
import {type CounterSchema} from 'entities/Counter';
import {type UserSchema} from 'entities/User';
import {type LoginSchema} from 'features/AuthByUsername';
import {type ReducerManager} from './reducerManager';
import {type ProfileSchema} from 'entities/Profile';
import {type NavigateOptions, type To} from 'react-router-dom';
import {type AxiosInstance} from 'axios';
import {type ArticleDetailsSchema} from 'entities/Article';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // async
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkOptions<RejectValue> {
    extra: ThunkExtraArg
    rejectValue: RejectValue
    state: StateSchema
}
