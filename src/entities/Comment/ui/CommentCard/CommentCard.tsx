import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './CommentCard.module.scss';
import {type Comment} from '../../model/types/comment';
import {Avatar} from '@/shared/ui/Avatar';
import {Text} from '@/shared/ui/Text';
import {AppLink} from '@/shared/ui/AppLink';
import {getRouteProfiles} from '@/shared/const/router';

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
            <AppLink to={getRouteProfiles(comment.user.id)} className={styles.header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
                <Text text={comment.user.username} className={styles.username} />
            </AppLink>
            <Text text={comment.text} className={styles.text} />
        </div>
    );
});
