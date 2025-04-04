import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Overlay.module.scss';

interface OverlayProps {
    className?: string
    onClick?: () => void
}

export const Overlay: FC<OverlayProps> = memo((props) => {
    const {
        className,
        onClick
    } = props;

    return (
        <div
            className={classNames(styles.overlay, {}, [className])}
            onClick={onClick}
        />
    );
});
