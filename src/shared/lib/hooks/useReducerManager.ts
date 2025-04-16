import {useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {type StateSchemaKey, type ReduxStoreWithManager, type StateSchema} from '@/app/providers/StoreProvider';
import {type Reducer} from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
};

export function useReducerManager (reducers: ReducerList, removeAfterUnmount: boolean = true) {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]) => {
            if (!store.reducerManager.has(key as StateSchemaKey)) {
                store.reducerManager.add(key as StateSchemaKey, reducer);
                dispatch({type: `@INIT ${key}`});
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key, reducer]) => {
                    store.reducerManager.remove(key as StateSchemaKey);
                    dispatch({type: `@DESTROY ${key}`});
                });
            }
        };

        // eslint-disable-next-line
    }, []);
}
