import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'main',
        Icon: MainIcon
    },
    {
        path: RoutePath.about,
        text: 'about',
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'profile',
        Icon: ProfileIcon,
        authOnly: true
    }
];
