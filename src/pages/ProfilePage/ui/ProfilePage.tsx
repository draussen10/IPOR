import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {type ReducerList, useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';
import {profileReducer} from 'entities/Profile';

const reducers: ReducerList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {t} = useTranslation();

    useReducerManager(reducers, true);

    const {
        className
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            {t('PROFILE')}
        </div>
    );
};

export default ProfilePage;
