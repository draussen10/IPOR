import {type FC, memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './ProfilePageHeader.m.scss';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {getProfileData, profileActions, updateProfileData} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';

interface ProfilePageHeaderProps {
    className?: string
    readonly?: boolean
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const {readonly} = props;
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
        <div className={styles.header}>
            <Text title={t('title')} />
            {canEdit && (
                <div className={styles.btns}>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={styles.editBtn}
                                onClick={onEdit}
                            >
                                {t('edit')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    className={styles.editBtn}
                                    onClick={onCancelEdit}
                                >
                                    {t('cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    className={styles.editBtn}
                                    onClick={onSave}
                                >
                                    {t('save')}
                                </Button>
                            </>
                        )}
                </div>
            )}
        </div>
    );
});
