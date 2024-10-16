import {type Meta, type StoryObj} from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'shared/Input'
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        label: 'Login',
        value: 'Harry Potter'
    }
};
