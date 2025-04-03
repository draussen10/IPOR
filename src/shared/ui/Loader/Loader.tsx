import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Loader.m.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <span className={classNames(styles.loader, {}, [className])}></span>
    );
};
