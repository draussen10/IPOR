import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type Profile, type ProfileSchema} from '../types/profile';
import {fetchProfileData} from '../services/fetchProfileData';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: false
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
});

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
