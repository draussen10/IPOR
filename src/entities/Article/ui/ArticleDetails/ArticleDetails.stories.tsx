import {ArticleDetails} from './ArticleDetails';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetails> = {
    component: ArticleDetails,
    title: 'entities/Article/ArticleDetails'
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

export const Light: Story = {
    args: {
        id: ''
    },
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    args: {
        id: ''
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
