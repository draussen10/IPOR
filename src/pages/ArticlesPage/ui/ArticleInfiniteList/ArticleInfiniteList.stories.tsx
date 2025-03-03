import {ArticleInfiniteList} from './ArticleInfiniteList';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleInfiniteList> = {
    component: ArticleInfiniteList,
    title: '.../ArticleInfiniteList'
};

export default meta;

type Story = StoryObj<typeof ArticleInfiniteList>;

export const Light: Story = {
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
