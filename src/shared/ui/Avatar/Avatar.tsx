import {type CSSProperties, type FC, memo, useMemo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';
import {AppImage} from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import {Icon} from '../Icon';
import {Skeleton} from '../Skeleton';

interface AvatarProps {
    className?: string
    src: string
    alt?: string
    size?: number
    errorFallbackInverted?: boolean
}

export const Avatar: FC<AvatarProps> = memo((props) => {
    const {
        className,
        src,
        alt,
        size = 100,
        errorFallbackInverted
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size]);

    const fallback = <Skeleton width={size} height={size} borderRadius='50%' />;
    const errorFallback = <Icon inverted={errorFallbackInverted} Svg={UserIcon} width={size} height={size} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={style}
            className={classNames(styles.avatar, {}, [className])}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
});
