import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.m.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {useTranslation} from 'react-i18next';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {AppRoute, RoutePath} from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}
        >
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
            <Button
                square
                size={ButtonSize.L}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapsedBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath[AppRoute.MAIN]}
                    className={styles.item}
                >
                    <div className={styles.itemContainer}>
                        <MainIcon className={styles.icon} />
                        <p className={styles.link}>{t('main')}</p>
                    </div>

                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath[AppRoute.ABOUT]}
                    className={styles.item}
                >
                    <div className={styles.itemContainer}>
                        <AboutIcon className={styles.icon} />
                        <p className={styles.link}>{t('about')}</p>
                    </div>
                </AppLink>
            </div>
        </div>
    );
};
