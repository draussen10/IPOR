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
import {
    AppRoute,
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile
} from '@/shared/const/router';
import {type AppRouteProps} from '@/shared/types/router';

export const routeConfig: Record<AppRoute, AppRouteProps> = {
    [AppRoute.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    },
    [AppRoute.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />
    },
    [AppRoute.PROFILES]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoute.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true
    },
    [AppRoute.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    [AppRoute.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleCreatePage />,
        authOnly: true
    },
    [AppRoute.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true
    },
    [AppRoute.ADMIN_PANEL]: {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN]
    },
    [AppRoute.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />
    },
    [AppRoute.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage />
    }
};
