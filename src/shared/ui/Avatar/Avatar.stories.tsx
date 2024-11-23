import {Avatar} from './Avatar';
import {type Meta, type StoryObj} from '@storybook/react';
import AvatarImg from '../../assets/test/storybook_profile.jpg';

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    title: 'shared/Avatar'
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        alt: 'Здесь должен быть alt',
        size: 100
    }
};

export const Small: Story = {
    args: {
        src: AvatarImg,
        alt: 'Здесь должен быть alt',
        size: 50
    }
};
