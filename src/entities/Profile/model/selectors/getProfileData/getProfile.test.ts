import {type StateSchema} from 'app/providers/StoreProvider';
import {getProfileData} from './getProfileData';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';

describe('getProfileData.test', () => {
    test('should return data', () => {
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
                data
            }
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
