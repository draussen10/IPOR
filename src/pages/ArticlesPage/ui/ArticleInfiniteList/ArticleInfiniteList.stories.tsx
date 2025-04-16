import {ArticleInfiniteList} from './ArticleInfiniteList';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {ArticleSortField, ArticleView} from '@/entities/Article';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof ArticleInfiniteList> = {
    component: ArticleInfiniteList,
    title: 'pages/Articles/ArticleInfiniteList',
    decorators: [StoreDecorator({
        articlesPage: {
            isLoading: false,
            view: ArticleView.SMALL,
            page: 1,
            hasMore: false,
            order: 'asc',
            search: '',
            sort: ArticleSortField.TITLE,
            limit: 4,
            ids: [1],
            entities: {
                1: {
                    id: '1',
                    title: 'Javascript news СВЕЖАЯ',
                    subtitle: 'Что нового в JS за 2022 год?',
                    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                    views: 1022,
                    createdAt: '26.04.2022',
                    type: [],
                    blocks: [],
                    user: {
                        id: '1',
                        username: 'admin',
                        roles: [],
                        avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200'
                    }
                }
            }
        }
    })]
};

export default meta;

type Story = StoryObj<typeof ArticleInfiniteList>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
