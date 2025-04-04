import {type CSSProperties, type FC, memo, useMemo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src: string
    alt?: string
    size?: number
}

export const Avatar: FC<AvatarProps> = memo((props) => {
    const {
        className,
        src,
        alt,
        size = 100
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={style}
            className={classNames(styles.avatar, {}, [className])}
        />
    );
});
