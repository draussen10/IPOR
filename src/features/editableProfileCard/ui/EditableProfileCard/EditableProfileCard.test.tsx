import {componentRender} from '@/shared/lib/tests/ComponentRender/ComponentRender';
import {EditableProfileCard} from './EditableProfileCard';
import {type Profile} from '@/entities/Profile';
import {Currency} from '@/entities/Currency';
import {Country} from '@/entities/Country';
import {profileReducer} from '../../model/slice/profileSlice';
import {userEvent} from '@testing-library/user-event';
import {screen} from '@testing-library/react';
import {$api} from '@/shared/api/api';

const profile: Profile = {
    id: '1',
    firstname: 'Алексей',
    lastname: 'Боев',
    age: 465,
    currency: Currency.USD,
    country: Country.BELARUS,
    city: 'Moscow',
    username: 'draussen10',
    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200'
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            isLoading: false,
            data: profile,
            form: profile
        },
        user: {
            authData: {id: '1', username: 'draussen10'}
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
};

describe('features/EditableProfileCard', () => {
    test('Режим readonly должен переключаться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
        expect(screen.getByTestId('EditableProfileCard.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'Василий');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'Пупкин');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Василий');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Пупкин');

        await userEvent.click(screen.getByTestId('EditableProfileCard.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Алексей');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Боев');
    });

    test('Должна появляться ошибка', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Нет ошибок валидации', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options);

        const mockPutReq = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
