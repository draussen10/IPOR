import ArticleRating from './ArticleRating';
import {type Meta, type StoryObj} from '@storybook/react';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {type UserRole} from '@/entities/User';

const meta: Meta<typeof ArticleRating> = {
    component: ArticleRating,
    title: 'features/ArticleRating',
    args: {
        articleId: '1'
    },
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'draussen',
                roles: ['USER' as UserRole.USER]
            }
        }
    })]
};

export default meta;

type Story = StoryObj<typeof ArticleRating>;

export const Empty: Story = {
    parameters: {
        mockData: [
            {
                url: __API__ + '/article-ratings?userId=1&articleId=1',
                method: 'GET',
                status: 200,
                response: []
            }
        ]
    }
};

export const WithRate: Story = {
    parameters: {
        mockData: [
            {
                url: __API__ + '/article-ratings?userId=1&articleId=1',
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 3,
                        feedback: 'feedback'
                    }
                ]
            }
        ]
    }
};
