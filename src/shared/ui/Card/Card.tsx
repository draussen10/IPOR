import {type FC, type HTMLAttributes} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Card.m.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    theme?: CardTheme
}

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(styles.card, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
