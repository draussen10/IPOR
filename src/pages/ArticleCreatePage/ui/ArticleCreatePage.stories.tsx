import ArticleCreatePage from './ArticleCreatePage';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleCreatePage> = {
    component: ArticleCreatePage,
    title: 'pages/ArticleCreatePage',
    decorators: [StoreDecorator({})]
};

export default meta;

type Story = StoryObj<typeof ArticleCreatePage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
