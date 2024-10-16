import MainPage from './MainPage';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: 'pages/MainPage'
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
