import {NotificationList} from './NotificationList';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';
import {type Notification} from '@/entities/Notification/model/types/Notification';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const item: Notification = {
    title: 'title',
    id: '1',
    description: 'description'
};

const meta: Meta<typeof NotificationList> = {
    component: NotificationList,
    title: 'entities/Notification/NotificationList',
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: __API__ + '/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {...item, id: '1'},
                    {...item, id: '2'},
                    {...item, id: '3'}
                ]
            }
        ]
    }
};

export default meta;

type Story = StoryObj<typeof NotificationList>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
