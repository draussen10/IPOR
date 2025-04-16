import {type RouteProps} from 'react-router-dom';
// eslint-disable-next-line ipor/layer-imports
import {type UserRole} from '@/entities/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
};
