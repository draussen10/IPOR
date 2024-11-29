import {type FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './CommentCard.m.scss';
import {type Comment} from '../../model/types/comment';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Text} from 'shared/ui/Text/Text';

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
            <div className={styles.header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
                <Text text={comment.user.username} className={styles.username} />
            </div>
            <Text text={comment.text} className={styles.text} />
        </div>
    );
});
