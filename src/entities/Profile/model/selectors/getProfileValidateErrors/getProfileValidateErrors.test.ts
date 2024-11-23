import {type StateSchema} from 'app/providers/StoreProvider';
import {getProfileValidateErrors} from './getProfileValidateErrors';
import {ValidateProfileError} from 'entities/Profile';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_USER_DATA
                ]
            }
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USER_DATA
        ]);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
