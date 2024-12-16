import {CommentList} from './CommentList';
import {type Meta, type StoryObj} from '@storybook/react';
import AvatarImg from 'shared/assets/test/storybook_profile.jpg';

const meta: Meta<typeof CommentList> = {
    component: CommentList,
    title: 'entities/Comment/CommentList'
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                user: {
                    id: '1',
                    username: 'Username',
                    avatar: AvatarImg
                },
                text: 'text1'
            },
            {
                id: '2',
                user: {
                    id: '1',
                    username: 'Username',
                    avatar: AvatarImg
                },
                text: 'text2'
            },
            {
                id: '3',
                user: {
                    id: '1',
                    username: 'Username',
                    avatar: AvatarImg
                },
                text: 'text3'
            }
        ]
    }
};

export const IsLoading: Story = {
    args: {
        isLoading: true
    }
};

export const Error: Story = {
    args: {
        error: 'error'
    }
};
