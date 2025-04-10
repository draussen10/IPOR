import {rtkApi} from '@/shared/api/rtkApi';
import {type Notification} from '../model/types/Notification';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications'
            })
        })
    })
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
