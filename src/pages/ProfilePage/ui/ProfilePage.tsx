import {type FC} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Page} from '@/widgets/Page';
import styles from './ProfilePage.module.scss';
import {EditableProfileCard} from '@/features/editableProfileCard';
import {useParams} from 'react-router-dom';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {id} = useParams<{ id: string }>();
    const {className} = props;

    return (
        <Page className={classNames(styles.profile, {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
