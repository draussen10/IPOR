import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type UISchema} from '../types/UISchema';

const initialState: UISchema = {
    scroll: {}
};

const UISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position;
        }
    }
});

export const {actions: UIActions} = UISlice;
export const {reducer: UIReducer} = UISlice;
