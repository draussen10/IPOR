import {Sidebar} from './Sidebar';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'widget/Sidebar'
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {}
            }
        })
    ]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {}
            }
        })
    ]
};

export const NoAuth: Story = {
    decorators: [
        StoreDecorator({
            user: {}
        })
    ]
};
