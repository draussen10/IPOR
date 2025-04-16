import ArticleEditPage from './ArticleEditPage';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof ArticleEditPage> = {
    component: ArticleEditPage,
    title: 'pages/ArticleEditPage',
    decorators: [StoreDecorator({})]
};

export default meta;

type Story = StoryObj<typeof ArticleEditPage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
