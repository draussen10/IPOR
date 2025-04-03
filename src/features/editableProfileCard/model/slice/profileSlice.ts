import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type ProfileSchema} from '../types/editableProfileCardSchema';
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData';
import {updateProfileData} from '../services/updateProfileData/updateProfileData';
import {type Profile} from '@/entities/Profile';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.form = state.data;
            state.readonly = true;
            state.validateErrors = undefined;
        },
        updateForm: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(updateProfileData.pending, (state, action) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validateErrors = action.payload;
                state.isLoading = false;
            });
    }
});

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
