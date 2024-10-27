import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './ProfileCard.m.scss';
import {useSelector} from 'react-redux';
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {t} = useTranslation('profilePage');
    const data = useSelector(getProfileData);

    const {
        className
    } = props;

    return (
        <div className={classNames(styles.profileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('title')} />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={styles.editBtn}
                >
                    {t('edit')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    className={styles.input}
                    value={data?.firstname}
                    label={t('firstname')}
                />
                <Input
                    className={styles.input}
                    value={data?.lastname}
                    label={t('lastname')}
                />
            </div>
        </div>
    );
};
