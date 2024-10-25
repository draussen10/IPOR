import ProfilePage from './ProfilePage';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
    title: 'pages/ProfilePage'
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: StoreDecorator({
        profile: {
            readonly: false,
            isLoading: false
        }
    })
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                readonly: false,
                isLoading: false
            }
        })]
};
