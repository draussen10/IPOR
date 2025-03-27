import {type FC, memo} from 'react';
import styles from './NotificationButton.m.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Icon} from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import {NotificationList} from 'entities/Notification';
import {Popover} from 'shared/ui/Popups';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
    return (
        <Popover
            trigger={(
                <Button theme={ButtonTheme.CLEAR} >
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}
            direction={'bottom left'}
        >
            <NotificationList className={styles.notifications} />
        </Popover>
    );
});
