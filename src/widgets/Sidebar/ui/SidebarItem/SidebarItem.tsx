import {type FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './Sidebaritem.module.scss';
import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';
import {getUserAuthData} from '@/entities/User';
import {type SidebarItemType} from '../../model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
    const {t} = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    const {
        item,
        collapsed
    } = props;

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={item.path}
            className={classNames(styles.item, {[styles.collapsed]: collapsed})}
        >
            <div className={styles.itemContainer}>
                <item.Icon className={styles.icon} />
                <p className={styles.link}>{t(item.text)}</p>
            </div>

        </AppLink>
    );
});
