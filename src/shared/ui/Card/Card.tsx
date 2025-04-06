import {type FC, type HTMLAttributes} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    theme?: CardTheme
    max?: boolean
}

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max = false,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(
                styles.card,
                {[styles.max]: max},
                [className, styles[theme]]
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};
