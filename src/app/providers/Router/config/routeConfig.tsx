import {MainPage} from '@/pages/MainPage';
import {AboutPage} from '@/pages/AboutPage';
import {NotFoundPage} from '@/pages/NotFoundPage';
import {ProfilePage} from '@/pages/ProfilePage';
import {ArticlesPage} from '@/pages/ArticlesPage';
import {ArticleDetailsPage} from '@/pages/ArticleDetailsPage';
import {ArticleCreatePage} from '@/pages/ArticleCreatePage';
import {ArticleEditPage} from '@/pages/ArticleEditPage';
import {AdminPanelPage} from '@/pages/AdminPanelPage';
import {UserRole} from '@/entities/User';
import {ForbiddenPage} from '@/pages/ForbiddenPage';
import {AppRoute, RoutePath} from '@/shared/const/router';
import {type AppRouteProps} from '@/shared/types/router';

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
    [AppRoute.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN]
    },
    [AppRoute.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />
    },
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
