import {type StateSchema} from '@/app/providers/StoreProvider';
import {getProfileForm} from './getProfileForm';
import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const data = {
            username: 'draussen',
            firstname: 'Aleksey',
            lastname: 'Boev',
            age: 24,
            country: Country.RUSSIA,
            currency: Currency.RUB,
            city: 'Saint-Petersburg'
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
