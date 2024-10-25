import {createSlice} from '@reduxjs/toolkit';
import {type ProfileSchema} from '../types/profile';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: false
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
});

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
