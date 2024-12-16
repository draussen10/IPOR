import {type EntityState} from '@reduxjs/toolkit';
import {type Article, type ArticleType, type ArticleView} from 'entities/Article';
import {type SortOrder} from 'shared/types';
import {type ArticleSortField} from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    // pagination
    page: number
    limit: number
    hasMore: boolean

    // filter
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType

    _inited: boolean
}
