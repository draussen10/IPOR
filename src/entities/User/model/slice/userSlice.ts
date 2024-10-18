import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type User, type UserSchema} from '../types/user';
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localsStorage';

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state, action: PayloadAction<User>) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state, action: PayloadAction<User>) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        }
    }
});

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
