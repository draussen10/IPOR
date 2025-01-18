import {type FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Text.m.scss';

export enum TextTheme {
    DEFAULT = 'default',
    ERROR = 'error',
    INVERTED = 'inverted'
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.DEFAULT,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props;

    const additional: Array<string | undefined> = [
        className,
        styles[theme],
        styles[align],
        styles[size]
    ];

    return (
        <div className={classNames(styles.text, {}, additional)}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
