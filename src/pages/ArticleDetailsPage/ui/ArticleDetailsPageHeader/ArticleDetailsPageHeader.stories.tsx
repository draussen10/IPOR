import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    component: ArticleDetailsPageHeader,
    title: 'pages/ArticleDetails/PageHeader'
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Light: Story = {
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
