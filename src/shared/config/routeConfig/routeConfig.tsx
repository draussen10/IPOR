import {type RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {ProfilePage} from 'pages/ProfilePage';
import {ArticlesPage} from 'pages/ArticlesPage';
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage';
import {ArticleCreatePage} from 'pages/ArticleCreatePage';
import ArticleEditPage from 'pages/ArticleEditPage/ui/ArticleEditPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
};

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILES = 'profiles',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILES]: '/profiles/', // + :id
    [AppRoute.ARTICLES]: '/articles',
    [AppRoute.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoute.ARTICLE_CREATE]: '/articles/new',
    [AppRoute.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoute.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoute, AppRouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoute.PROFILES]: {
        path: `${RoutePath.profiles}:id`,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoute.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true
    },
    [AppRoute.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    [AppRoute.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleCreatePage />,
        authOnly: true
    },
    [AppRoute.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
