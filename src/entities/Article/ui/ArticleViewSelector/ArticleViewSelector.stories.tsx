import {ArticleViewSelector} from './ArticleViewSelector';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {ArticleView} from '../../model/types/article';
import {fn} from '@storybook/test';

const meta: Meta<typeof ArticleViewSelector> = {
    component: ArticleViewSelector,
    title: 'entities/Article/ArticleViewSelector'
};

export default meta;

type Story = StoryObj<typeof ArticleViewSelector>;

export const Light: Story = {
    args: {
        view: ArticleView.SMALL,
        onViewClick: fn()
    },
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    args: {
        view: ArticleView.SMALL,
        onViewClick: fn()
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
