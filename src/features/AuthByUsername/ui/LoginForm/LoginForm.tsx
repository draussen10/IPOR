import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './LoginForm.m.scss';
import {Button} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Input
                type='text'
                className={styles.input}
                label={t('login')}
                autofocus
            />
            <Input
                type='text'
                className={styles.input}
                label={t('password')}
            />
            <Button className={styles.loginBtn}>
                {t('signIn')}
            </Button>
        </div>
    );
};
