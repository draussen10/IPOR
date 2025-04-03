import {type StateSchema} from '@/app/providers/StoreProvider';
import {getProfileReadonly} from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('has readonly with value true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    test('no readonly', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });
});
