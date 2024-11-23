import {type FC, useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ProfilePage.m.scss';
import {type ReducerList, useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError
} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {ProfilePageHeader} from './ProfilePageHeader/ProfilePageHeader';
import {type Currency} from 'entities/Currency/model/types/currency';
import {type Country} from 'entities/Country/model/types/country';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';

const reducers: ReducerList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {t} = useTranslation('profile');

    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.NO_DATA]: t('no_data'),
        [ValidateProfileError.SERVER_ERROR]: t('server_error'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect_user_data'),
        [ValidateProfileError.INCORRECT_AGE]: t('incorrect_age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect_country')
    };

    useReducerManager(reducers, true);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const {
        className
    } = props;

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({firstname: value || ''}));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({lastname: value || ''}));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({age: Number(value || 0)}));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({city: value}));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({avatar: value}));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({username: value}));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateForm({currency: value}));
    }, [dispatch]);

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.updateForm({country: value}));
    }, [dispatch]);

    return (
        <div className={classNames(styles.profile, {}, [className])}>
            <ProfilePageHeader readonly={readonly} />
            {validateErrors?.length && validateErrors?.map(err => (
                <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslates[err]} />
            ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                readonly={readonly}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
};

export default ProfilePage;
