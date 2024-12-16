import {Page} from './Page';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Page> = {
    component: Page,
    title: 'widgets/Page'
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Light: Story = {
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
