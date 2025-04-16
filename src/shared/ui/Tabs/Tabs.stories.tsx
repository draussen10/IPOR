import {Tabs} from './Tabs';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {fn} from '@storybook/test';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    title: 'shared/Tabs'
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const args = {
    value: 'tab 1',
    tabs: [
        {
            title: 'tab 1',
            value: 'tab 1'
        },
        {
            title: 'tab 2',
            value: 'tab 2'
        },
        {
            title: 'tab 3',
            value: 'tab 3'
        },
        {
            title: 'tab 4',
            value: 'tab 4'
        },
        {
            title: 'tab 5',
            value: 'tab 5'
        },
        {
            title: 'tab 6',
            value: 'tab 6'
        }
    ],
    onTabClick: fn()
};

export const Light: Story = {
    args,
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    args,
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
