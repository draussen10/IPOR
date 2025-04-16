import { type LoginSchema} from '../types/loginSchema';
import {loginActions, loginReducer} from './loginSlice';
import {loginByUsername} from '../services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {username: '123'};

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('admin')
        ))
            .toEqual({username: 'admin'});
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {password: '123'};

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('321')
        ))
            .toEqual({password: '321'});
    });

    test('test set isLoading', () => {
        const state: DeepPartial<LoginSchema> = {isLoading: false};

        expect(loginReducer(
            state as LoginSchema,
            loginByUsername.pending
        ))
            .toEqual({isLoading: true});
    });
});
