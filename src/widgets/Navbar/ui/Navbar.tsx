import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.m.scss';
import {useTranslation} from 'react-i18next';
import {memo, useCallback, useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, userActions} from 'entities/User';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {Dropdown} from 'shared/ui/Dropdown/Dropdown';
import {Avatar} from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(styles.navbar, {}, [className])}>
                <Text className={styles.appName} title={t('IPOR')} theme={TextTheme.INVERTED}/>
                <AppLink to={RoutePath.article_create} className={styles.createLink}>
                    {t('createArticle')}
                </AppLink>
                <Dropdown
                    items={[
                        {
                            title: t('Профиль пользователя'),
                            href: RoutePath.profiles + authData.id
                        },
                        {
                            title: t('signOut'),
                            onClick: onLogout
                        }
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar ?? ''}/>}
                    className={styles.dropdown}
                    direction={'bottom left'}
                />
            </header>
        );
    }

    return (
        <header className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={styles.links} onClick={() => setIsAuthModal(true)}>
                {t('signIn')}
            </Button>

            {<LoginModal
                isOpen={isAuthModal}
                onClose={() => setIsAuthModal(false)}
            />}
        </header>
    );
});
