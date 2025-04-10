import {updateProfileData} from './updateProfileData';
import {TestAsyncThunk} from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import {ValidateProfileError} from '../../types/editableProfileCardSchema';

const data = {
    username: 'draussen',
    firstname: 'Aleksey',
    lastname: 'Boev',
    age: 24,
    country: Country.RUSSIA,
    currency: Currency.RUB,
    city: 'Saint-Petersburg'
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, age: undefined}
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
