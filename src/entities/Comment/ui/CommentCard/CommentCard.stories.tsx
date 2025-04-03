import {CommentCard} from './CommentCard';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from '@/shared/assets/test/storybook_profile.jpg';

const meta: Meta<typeof CommentCard> = {
    component: CommentCard,
    title: 'entities/Comment/CommentCard'
};

export default meta;

const comment = {
    id: '1',
    user: {
        id: '1',
        username: 'Username',
        avatar: AvatarImg
    },
    text: 'text1'
};

type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
    args: {
        comment
    },
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    args: {
        comment
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
