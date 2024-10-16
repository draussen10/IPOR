import {AppLink, AppLinkTheme} from './AppLink';
import {type Meta, type StoryObj} from '@storybook/react';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    title: 'shared/AppLink'
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Link'
    }
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Link'
    }
};
