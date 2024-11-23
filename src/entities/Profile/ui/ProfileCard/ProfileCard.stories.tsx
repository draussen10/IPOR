import {ProfileCard} from './ProfileCard';
import {type Meta, type StoryObj} from '@storybook/react';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
import AvatarImg from 'shared/assets/test/storybook_profile.jpg';

const meta: Meta<typeof ProfileCard> = {
    component: ProfileCard,
    title: 'entities/ProfileCard'
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'draussen',
            firstname: 'Aleksey',
            lastname: 'Boev',
            age: 24,
            country: Country.RUSSIA,
            currency: Currency.RUB,
            city: 'Saint-Petersburg',
            avatar: AvatarImg
        }
    }
};

export const IsLoading: Story = {
    args: {
        isLoading: true
    }
};

export const Error: Story = {
    args: {
        error: '123'
    }
};
