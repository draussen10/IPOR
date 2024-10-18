import {LoginForm} from './LoginForm';
import {type Meta, type StoryObj} from '@storybook/react';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    component: LoginForm,
    title: 'features/LoginForm'
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: 'Username',
            password: 'Password'
        }
    })]
};

export const Error: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: 'Username',
            password: 'Password',
            error: 'error'
        }
    })]
};

export const Loading: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: 'Username',
            password: 'Password',
            isLoading: true
        }
    })]
};
