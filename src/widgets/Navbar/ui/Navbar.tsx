import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Navbar.m.scss';
import {useTranslation} from 'react-i18next';
import {memo, useState} from 'react';
import {Button, ButtonTheme} from '@/shared/ui/Button/Button';
import {LoginModal} from '@/features/AuthByUsername';
import {useSelector} from 'react-redux';
import {getUserAuthData} from '@/entities/User';
import {AppLink} from '@/shared/ui/AppLink/AppLink';
import {Text, TextTheme} from '@/shared/ui/Text/Text';
import {RoutePath} from '@/shared/config/routeConfig/routeConfig';
import {HStack} from '@/shared/ui/Stack';
import {NotificationButton} from '@/features/notidicationButton/ui/NotificationButton/NotificationButton';
import {AvatarDropdown} from '@/features/avatarDropdown/ui/AvatarDropdown/AvatarDropdown';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    if (authData) {
        return (
            <header className={classNames(styles.navbar, {}, [className])}>
                <Text className={styles.appName} title={t('IPOR')} theme={TextTheme.INVERTED}/>
                <AppLink to={RoutePath.article_create} className={styles.createLink}>
                    {t('createArticle')}
                </AppLink>
                <HStack gap={'16'} className={styles.actions} >
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
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
