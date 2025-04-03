import {PageError} from './PageError';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';

const meta: Meta<typeof PageError> = {
    component: PageError,
    title: 'widget/PageError'
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
