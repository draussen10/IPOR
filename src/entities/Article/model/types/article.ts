import {type User} from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'created'
}

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export enum ArticleView {
    BIG = 'big',
    SMALL = 'small'
}

interface ArticleBaseBlock {
    id: string
    type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
    type: ArticleBlockType.CODE
    code: string
}

export interface ArticleTextBlock extends ArticleBaseBlock {
    type: ArticleBlockType.TEXT
    title: string
    paragraphs: string[]
}

export interface ArticleImageBlock extends ArticleBaseBlock {
    type: ArticleBlockType.IMAGE
    src: string
    title?: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface Article {
    id: string
    title: string
    user: User
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}
