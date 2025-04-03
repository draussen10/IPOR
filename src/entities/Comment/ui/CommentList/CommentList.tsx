import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './CommentList.m.scss';
import {type Comment} from '../../model/types/comment';
import {Text, TextAlign} from '@/shared/ui/Text/Text';
import {CommentCard} from '../CommentCard/CommentCard';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';
import {VStack} from '@/shared/ui/Stack';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
    error?: string
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const {t} = useTranslation();

    const {
        className,
        comments,
        isLoading,
        error
    } = props;

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames(styles.commentList, {}, [className])}>
                <Skeleton height={85} width={'100%'} className={styles.comment} />
                <Skeleton height={85} width={'100%'} className={styles.comment} />
                <Skeleton height={85} width={'100%'} className={styles.comment} />
                <Skeleton height={85} width={'100%'} className={styles.comment} />
            </VStack>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.commentList, {}, [className])}>
                <Text
                    title={t('commetnsLoadingError')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <VStack gap="8" max className={classNames(styles.commentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard
                        key={comment.id}
                        className={styles.comment}
                        comment={comment}
                    />
                ))
                : (
                    <Text text={t('noComments')} />
                )}
        </VStack>
    );
});
