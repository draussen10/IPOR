import MainPage from './MainPage';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: 'pages/MainPage',
    decorators: [StoreDecorator({})]
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
