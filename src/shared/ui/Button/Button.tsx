import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Button.m.scss';
import {type ButtonHTMLAttributes, type FC, memo} from 'react';

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        children,
        className,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        square,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                styles.button,
                {
                    [styles.square]: square,
                    [styles.disabled]: otherProps.disabled
                },
                [
                    className,
                    styles[theme],
                    styles[size]
                ]
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
});
