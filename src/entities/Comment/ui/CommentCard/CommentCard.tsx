import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './CommentCard.m.scss';
import {type Comment} from '../../model/types/comment';
import {Avatar} from '@/shared/ui/Avatar/Avatar';
import {Text} from '@/shared/ui/Text/Text';
import {AppLink} from '@/shared/ui/AppLink/AppLink';
import {RoutePath} from '@/shared/config/routeConfig/routeConfig';

interface CommentCardProps {
    className?: string
    comment: Comment
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const {
        className,
        comment
    } = props;

    return (
        <div className={classNames(styles.commentCard, {}, [className])}>
            <AppLink to={RoutePath.profiles + comment.user.id} className={styles.header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
                <Text text={comment.user.username} className={styles.username} />
            </AppLink>
            <Text text={comment.text} className={styles.text} />
        </div>
    );
});
