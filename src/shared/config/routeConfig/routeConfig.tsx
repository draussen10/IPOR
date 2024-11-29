import {type RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {ProfilePage} from 'pages/ProfilePage';
import {ArticlesPage} from 'pages/ArticlesPage';
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
};

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE]: '/profile',
    [AppRoute.ARTICLES]: '/articles',
    [AppRoute.ARTICLE_DETAILS]: '/articles/', // + :id
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
    [AppRoute.PROFILE]: {
        path: RoutePath.profile,
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
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
