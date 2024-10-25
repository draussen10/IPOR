import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './LoginForm.m.scss';
import {Button} from 'shared/ui/Button/Button';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {Input} from 'shared/ui/Input/Input';
import {useSelector} from 'react-redux';
import {memo, useCallback} from 'react';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';

interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
    const dispatch = useAppDispatch();
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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({username, password}));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
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
