import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useNotifications} from '../../api/notificationApi';
import {VStack} from '@/shared/ui/Stack';
import {NotificationItem} from '../NotificationItem/NotificationItem';
import {Loader} from '@/shared/ui/Loader/Loader';

interface NotificationListProps {
    className?: string
}

export const NotificationList: FC<NotificationListProps> = memo((props) => {
    const {isLoading, data} = useNotifications(null, {
        pollingInterval: 5000
    });

    const {
        className
    } = props;

    if (isLoading) {
        return (
            <VStack justify={'center'} align={'center'} className={classNames('', {}, [className])}>
                <Loader />
            </VStack>
        );
    }

    return (
        <VStack gap={'16'} className={classNames('', {}, [className])}>
            {data?.map(item => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
