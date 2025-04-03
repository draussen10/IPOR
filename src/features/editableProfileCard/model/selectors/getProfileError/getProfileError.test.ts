import {type StateSchema} from '@/app/providers/StoreProvider';
import {getProfileError} from './getProfileError';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error'
            }
        };

        expect(getProfileError(state as StateSchema)).toEqual('error');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
