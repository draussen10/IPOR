import {type StateSchema} from '@/app/providers/StoreProvider';
import {getLoginUsername} from './getLoginUsername';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin'
            }
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
