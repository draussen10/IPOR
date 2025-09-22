import {createSelector} from '@reduxjs/toolkit';
import {getUserAuthData} from '@/entities/User';
import {getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile} from '@/shared/const/router';
import {type SidebarItemType} from '../types/sidebar';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'main',
                Icon: MainIcon
            },
            {
                path: getRouteAbout(),
                text: 'about',
                Icon: AboutIcon
            }
        ];

        if (userData) {
            sidebarItemList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'profile',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    text: 'articles',
                    Icon: ArticleIcon,
                    authOnly: true
                }
            );
        }

        return sidebarItemList;
    }
);
