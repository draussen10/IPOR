import {NotificationItem} from './NotificationItem';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof NotificationItem> = {
    component: NotificationItem,
    title: 'entities/Notification/NotificationItem',
    args: {
        item: {
            id: '1',
            title: 'Title',
            description: 'description'
        }
    }
};

export default meta;

type Story = StoryObj<typeof NotificationItem>;

export const Light: Story = {
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
