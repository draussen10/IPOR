import {useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {type StateSchemaKey, type ReduxStoreWithManager} from '../config/StateSchema';
import {type Reducer} from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
};

type ReducersListEntry = [StateSchemaKey, Reducer];

export function useReducerManager (reducers: ReducerList, removeAfterUnmount: boolean = true) {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
            if (!store.reducerManager.has(key)) {
                store.reducerManager.add(key, reducer);
                dispatch({type: `@INIT ${key}`});
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(key);
                    dispatch({type: `@DESTROY ${key}`});
                });
            }
        };

        // eslint-disable-next-line
    }, []);
}
