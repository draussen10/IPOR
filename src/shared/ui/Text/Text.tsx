import {type FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Text.m.scss';

export enum TextTheme {
    DEFAULT = 'default',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.DEFAULT,
        align = TextAlign.LEFT
    } = props;

    return (
        <div className={classNames(styles.text, {}, [className, styles[theme], styles[align]])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
