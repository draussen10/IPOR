import {createAsyncThunk} from '@reduxjs/toolkit';
import {type ThunkOptions} from '@/app/providers/StoreProvider';
import {ValidateProfileError} from '../../types/editableProfileCardSchema';
import {type Profile} from '@/entities/Profile';
import {getProfileForm} from '../../selectors/getProfileForm/getProfileForm';
import {validateProfileData} from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkOptions<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);
