import {type FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './NotificationItem.m.scss';
import {type Notification} from '../../model/types/Notification';
import {Card, CardTheme} from 'shared/ui/Card/Card';
import {Text} from 'shared/ui/Text/Text';

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem: FC<NotificationItemProps> = memo((props) => {
    const {
        className,
        item
    } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(styles.notificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={styles.link} target={'_blank'} href={item.href} rel={'noreferrer'} >
                {content}
            </a>
        );
    }

    return content;
});
