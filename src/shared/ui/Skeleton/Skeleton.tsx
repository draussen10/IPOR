import {type CSSProperties, type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Skeleton.m.scss';

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    borderRadius?: string
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        className,
        height = 100,
        width = 100,
        borderRadius
    } = props;

    const style: CSSProperties = {
        height,
        width,
        borderRadius
    };

    return (
        <div style={style} className={classNames(styles.skeleton, {}, [className])}>

        </div>
    );
};
