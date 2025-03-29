import {type FC, memo, useState} from 'react';
import styles from './NotificationButton.m.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Icon} from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import {NotificationList} from 'entities/Notification';
import {Popover} from 'shared/ui/Popups';
import {Drawer} from 'shared/ui/Drawer/Drawer';
import {BrowserView, MobileView} from 'react-device-detect';
import {AnimationProvider} from 'shared/lib/components/AnimationProvider';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onOpenDrawer = () => setIsDrawerOpen(true);
    const onCloseDrawer = () => setIsDrawerOpen(false);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted/>
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    trigger={trigger}
                    direction={'bottom left'}
                >
                    <NotificationList className={styles.notifications}/>
                </Popover>
            </BrowserView>

            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
                        <NotificationList/>
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </>
    );
});
