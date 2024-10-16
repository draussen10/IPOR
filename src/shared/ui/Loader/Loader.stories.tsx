import {Loader} from './Loader';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: 'shared/Loader'
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
