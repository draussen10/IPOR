import {useSelector} from 'react-redux';
import {getUserAuthData, getUserRoles} from 'entities/User';
import {Navigate, useLocation} from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {type UserRole} from 'entities/User';
import {type FC, useMemo} from 'react';

interface RequireAuthProps {
    children: JSX.Element
    roles?: UserRole[]
}

export const RequireAuth: FC<RequireAuthProps> = ({ children, roles }) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some(role => userRoles?.includes(role));
    }, [roles, userRoles]);

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
