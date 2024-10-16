import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.m.scss';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={styles.links} onClick={() => setIsAuthModal(true)}>
                {t('signIn')}
            </Button>

            <LoginModal
                isOpen={isAuthModal}
                onClose={() => setIsAuthModal(false)}
            />
        </div>
    );
};
