import {createSelector} from '@reduxjs/toolkit';
import {getUserAuthData} from '@/entities/User';
import {RoutePath} from '@/shared/const/router';
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
                path: RoutePath.main,
                text: 'main',
                Icon: MainIcon
            },
            {
                path: RoutePath.about,
                text: 'about',
                Icon: AboutIcon
            }
        ];

        if (userData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profiles + userData.id,
                    text: 'profile',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    text: 'articles',
                    Icon: ArticleIcon,
                    authOnly: true
                }
            );
        }

        return sidebarItemList;
    }
);
