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
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        }
    }
});

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
