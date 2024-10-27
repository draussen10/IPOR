import {type FC, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {type ReducerList, useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducerList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    useReducerManager(reducers, true);

    const {
        className
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;
