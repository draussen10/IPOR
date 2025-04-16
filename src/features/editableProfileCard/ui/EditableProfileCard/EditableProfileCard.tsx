import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {ProfileCard} from '@/entities/Profile';
import {type Currency} from '@/entities/Currency';
import {type Country} from '@/entities/Country';
import {Text, TextTheme} from '@/shared/ui/Text';
import {getProfileForm} from '../../model/selectors/getProfileForm/getProfileForm';
import {getProfileIsLoading} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import {getProfileError} from '../../model/selectors/getProfileError/getProfileError';
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {getProfileValidateErrors} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import {ValidateProfileError} from '../../model/types/editableProfileCardSchema';
import {fetchProfileData} from '../../model/services/fetchProfileData/fetchProfileData';
import {profileActions, profileReducer} from '../../model/slice/profileSlice';
import {type ReducerList, useReducerManager} from '@/shared/lib/hooks/useReducerManager';
import {EditableProfileCardHeader} from '../EditableProfileCardHeader/EditableProfileCardHeader';
import {VStack} from '@/shared/ui/Stack';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect';

interface EditableProfileCardProps {
    className?: string
    id?: string
}

const reducers: ReducerList = {
    profile: profileReducer
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const {id} = props;

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

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

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
        <VStack gap="8" max>
            <EditableProfileCardHeader readonly={readonly} />
            {validateErrors?.length && validateErrors?.map(err => (
                <Text
                    key={err}
                    theme={TextTheme.ERROR}
                    text={validateErrorTranslates[err]}
                    data-testid={'EditableProfileCard.Error'}
                />
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
        </VStack>
    );
});
