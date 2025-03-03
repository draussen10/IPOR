import {validateProfileData} from './validateProfileData';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firstname', async () => {
        const result = validateProfileData({...data, firstname: ''});

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without age', async () => {
        const result = validateProfileData({...data, age: undefined});

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ]);
    });
});
