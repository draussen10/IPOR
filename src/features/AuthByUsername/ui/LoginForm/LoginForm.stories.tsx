import {LoginForm} from './LoginForm';
import {type Meta, type StoryObj} from '@storybook/react';

const meta: Meta<typeof LoginForm> = {
    component: LoginForm,
    title: 'features/LoginForm'
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {}
};
