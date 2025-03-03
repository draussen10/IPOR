import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Page} from 'widgets/Page/Page';
import styles from './ProfilePage.m.scss';
import {EditableProfileCard} from 'features/editableProfileCard';
import {Text} from 'shared/ui/Text/Text';
import {useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {t} = useTranslation();
    const {id} = useParams<{ id: string }>();
    const {className} = props;

    if (!id) {
        return <Text text={t('profileNotFound')} />;
    }

    return (
        <Page className={classNames(styles.profile, {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
