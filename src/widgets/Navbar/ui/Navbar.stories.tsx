import {Navbar} from './Navbar';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widget/Navbar'
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const LogIn: Story = {
    decorators: [StoreDecorator({})]
};

export const LogIn_Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};

export const LogOut: Story = {
    decorators: [StoreDecorator({
        user: {
            authData: {
                username: 'username',
                id: '1'
            }
        }
    })]
};

export const LogOut_Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: {
            authData: {
                username: 'username',
                id: '1'
            }
        }
    })]
};
