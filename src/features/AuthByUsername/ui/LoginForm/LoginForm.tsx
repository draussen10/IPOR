import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './LoginForm.m.scss';
import {Button} from 'shared/ui/Button/Button';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {Input} from 'shared/ui/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {memo, useCallback} from 'react';
import {loginActions} from '../../model/slice/loginSlice';
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const {username, password, isLoading, error} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Text title={t('loginFormTitle')} />
            {error && <Text text={t('loginFormErrorText')} theme={TextTheme.ERROR} />}
            <Input
                type='text'
                className={styles.input}
                label={t('login')}
                onChange={onChangeUsername}
                value={username}
                autofocus
            />
            <Input
                type='text'
                className={styles.input}
                label={t('password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={styles.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('signIn')}
            </Button>
        </div>
    );
});
