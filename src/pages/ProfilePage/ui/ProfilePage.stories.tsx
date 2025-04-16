import ProfilePage from './ProfilePage';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import AvatarImg from '@/shared/assets/test/storybook_profile.jpg';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
    title: 'pages/ProfilePage'
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: StoreDecorator({
        profile: {
            form: {
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
    })
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
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
        })
    ]
};
