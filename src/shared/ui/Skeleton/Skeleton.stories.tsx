import {Skeleton} from './Skeleton';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Skeleton> = {
    component: Skeleton,
    title: 'shared/Skeleton'
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
    args: {
        height: '100px',
        width: '200px'
    },
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    args: {
        height: '100px',
        width: '200px'
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};

export const Circle_Light: Story = {
    args: {
        borderRadius: '50%'
    },
    decorators: [StoreDecorator({})]
};

export const Circle_Dark: Story = {
    args: {
        borderRadius: '50%'
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
