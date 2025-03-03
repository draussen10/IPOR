import {type ProfileSchema, ValidateProfileError} from '../types/editableProfileCardSchema';
import {profileActions, profileReducer} from './profileSlice';
import {updateProfileData} from '../services/updateProfileData/updateProfileData';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';

const data = {
    username: 'draussen',
    firstname: 'Aleksey',
    lastname: 'Boev',
    age: 24,
    country: Country.RUSSIA,
    currency: Currency.RUB,
    city: 'Saint-Petersburg'
};
describe('profileSlice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        ))
            .toEqual({readonly: true});
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateErrors: [
                ValidateProfileError.INCORRECT_AGE,
                ValidateProfileError.INCORRECT_USER_DATA
            ]
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        ))
            .toEqual({
                readonly: true,
                validateErrors: undefined
            });
    });

    test('test updateForm', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: '2222',
                age: 13
            }
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateForm({
                age: 55,
                firstname: 'qwe'
            })
        ))
            .toEqual({
                form: {
                    username: '2222',
                    age: 55,
                    firstname: 'qwe'
                }
            });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        ))
            .toEqual({
                isLoading: true,
                validateErrors: undefined
            });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        ))
            .toEqual({
                isLoading: false,
                readonly: true,
                validateErrors: undefined,
                form: data,
                data
            });
    });
});
