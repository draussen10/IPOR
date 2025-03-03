import {type FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';
import {HStack} from 'shared/ui/Stack';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {profileActions} from '../../model/slice/profileSlice';
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData';
import {updateProfileData} from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string
    readonly: boolean
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const {readonly, className} = props;
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack
            justify={'between'}
            className={classNames('', {}, [className])}
        >
            <Text title={t('title')} />
            {canEdit && (
                <>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('edit')}
                            </Button>
                        )
                        : (
                            <HStack gap={'8'}>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('save')}
                                </Button>
                            </HStack>
                        )}
                </>
            )}
        </HStack>
    );
});
