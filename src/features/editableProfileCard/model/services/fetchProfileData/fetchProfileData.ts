import {createAsyncThunk} from '@reduxjs/toolkit';
import {type ThunkOptions} from 'app/providers/StoreProvider';
import {type Profile} from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkOptions<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            if (!profileId) {
                throw new Error();
            }

            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);
