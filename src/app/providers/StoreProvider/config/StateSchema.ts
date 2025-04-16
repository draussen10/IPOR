import {type EnhancedStore} from '@reduxjs/toolkit';
import {type CounterSchema} from '@/entities/Counter';
import {type UserSchema} from '@/entities/User';
import {type LoginSchema} from '@/features/authByUsername';
import {type ReducerManager} from './reducerManager';
import {type ProfileSchema} from '@/features/editableProfileCard';
import {type AxiosInstance} from 'axios';
import {type ArticleDetailsSchema} from '@/entities/Article';
import {type AddCommentFormSchema} from '@/features/addCommentForm';
import {type ArticlesPageSchema} from '@/pages/ArticlesPage';
import {type UISchema} from '@/features/ui';
import {type ArticleDetailsPageSchema} from '@/pages/ArticleDetailsPage';
import {type rtkApi} from '@/shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    ui: UISchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

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
