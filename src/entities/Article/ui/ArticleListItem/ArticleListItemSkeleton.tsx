import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticleListItem.m.scss';
import {ArticleView} from '../../model/types/article';
import {Card} from '@/shared/ui/Card/Card';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props) => {
    const {view, className} = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
                <Card>
                    <div className={styles.header}>
                        <Skeleton width={30} height={30} className={styles.img} borderRadius={'50%'} />
                        <Skeleton width={150} height={16} className={styles.username} />
                        <Skeleton width={150} height={16} className={styles.date} />
                    </div>
                    <Skeleton width={250} height={24} className={styles.title} />
                    <Skeleton width={'100%'} height={200} className={styles.image} />
                    <div className={styles.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
            <Card>
                <div className={styles.imageWrapper}>
                    <Skeleton width={200} height={200} className={styles.img} />
                </div>
                <div className={styles.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={styles.title} />
            </Card>
        </div>
    );
});
