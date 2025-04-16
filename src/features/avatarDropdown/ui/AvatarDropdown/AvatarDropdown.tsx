import {type FC, memo, useCallback, useState} from 'react';
import {RoutePath} from '@/shared/const/router';
import {Avatar} from '@/shared/ui/Avatar';
import {Dropdown} from '@/shared/ui/Popups';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, isUserAdmin as isUserAdminSelector, userActions} from '@/entities/User';
import {useTranslation} from 'react-i18next';

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const isUserAdmin = useSelector(isUserAdminSelector);
    const authData = useSelector(getUserAuthData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsAuthModal] = useState(false);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            items={[
                ...(isUserAdmin
                    ? [
                        {
                            title: t('Админ панель'),
                            href: RoutePath.admin_panel
                        }
                    ]
                    : []),
                {
                    title: t('Профиль пользователя'),
                    href: RoutePath.profiles + authData.id
                },
                {
                    title: t('signOut'),
                    onClick: onLogout
                }
            ]}
            trigger={<Avatar size={30} src={authData.avatar ?? ''}/>}
            direction={'bottom left'}
        />
    );
});
