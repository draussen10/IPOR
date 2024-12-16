import {type EnhancedStore} from '@reduxjs/toolkit';
import {type CounterSchema} from 'entities/Counter';
import {type UserSchema} from 'entities/User';
import {type LoginSchema} from 'features/AuthByUsername';
import {type ReducerManager} from './reducerManager';
import {type ProfileSchema} from 'entities/Profile';
import {type AxiosInstance} from 'axios';
import {type ArticleDetailsSchema} from 'entities/Article';
import {type AddCommentFormSchema} from 'features/addCommentForm';
import {type ArticlesPageSchema} from 'pages/ArticlesPage';
import {type UISchema} from 'features/UI';
import {type ArticleDetailsPageSchema} from 'pages/ArticleDetailsPage';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    ui: UISchema

    // async
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkOptions<RejectValue> {
    extra: ThunkExtraArg
    rejectValue: RejectValue
    state: StateSchema
}
