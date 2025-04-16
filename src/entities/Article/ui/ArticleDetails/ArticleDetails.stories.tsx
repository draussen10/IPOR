import {ArticleDetails} from './ArticleDetails';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof ArticleDetails> = {
    component: ArticleDetails,
    title: 'entities/Article/ArticleDetails'
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

export const Light: Story = {
    args: {
        articleId: ''
    },
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    args: {
        articleId: ''
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
