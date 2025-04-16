import {AvatarDropdown} from './AvatarDropdown';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {type UserRole} from '@/entities/User';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof AvatarDropdown> = {
    component: AvatarDropdown,
    title: 'features/AvatarDropdown',
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '111',
                avatar: 'sadfsa',
                roles: ['ADMIN' as UserRole.ADMIN],
                username: 'draussen'
            }
        }
    })]
};

export default meta;

type Story = StoryObj<typeof AvatarDropdown>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
