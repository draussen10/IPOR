import {type StateSchema} from '@/app/providers/StoreProvider';
import {getLoginPassword} from './getLoginPassword';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123'
            }
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
