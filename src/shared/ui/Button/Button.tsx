import React, {ButtonHTMLAttributes, FC} from 'react'
import {ComponentProps} from 'shared/types/ComponentProps'
import cls from './Button.module.scss'
import {classNames} from 'shared/lib/classNames'

export enum ThemeButton {
    CLEAR = 'clear',
    SIMPLE = 'simple',
    OUTLINED = 'outlined',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export interface ButtonProps extends ComponentProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton
    size?: SizeButton
    square?: boolean
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        size = SizeButton.M,
        square = false,
        ...otherProp} = props

    return (
        <button
            className={classNames(
                cls.button,
                {
                    [cls.square]: square
                },
                [
                    className,
                    cls[theme],
                    cls[size]
                ]
            )}
            {...otherProp}
        >
            {children}
        </button>
    )
}

export default Button