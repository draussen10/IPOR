import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './LoginForm.m.scss';
import {Button} from 'shared/ui/Button/Button';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {Input} from 'shared/ui/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {memo, useCallback} from 'react';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';

interface LoginFormProps {
    className?: string
}

const LoginForm = memo(({className}: LoginFormProps) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useReducerManager({
        loginForm: loginReducer
    });

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

export default LoginForm;
