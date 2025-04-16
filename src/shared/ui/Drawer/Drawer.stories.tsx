import {Drawer} from './Drawer';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof Drawer> = {
    component: Drawer,
    title: 'shared/Drawer',
    args: {
        isOpen: true
    }
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Light: Story = {
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
