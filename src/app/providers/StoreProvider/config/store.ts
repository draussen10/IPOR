import {type CombinedState, configureStore, type Reducer, type ReducersMapObject} from '@reduxjs/toolkit';
import {type StateSchema} from './StateSchema';
import {counterReducer} from '@/entities/Counter';
import {userReducer} from '@/entities/User';
import {createReducerManager} from './reducerManager';
import {$api} from '@/shared/api/api';
import {UIReducer} from '@/features/UI';
import {rtkApi} from '@/shared/api/rtkApi';

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        ui: UIReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        }).concat(rtkApi.middleware)
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
