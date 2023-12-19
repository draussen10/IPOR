import React, {ButtonHTMLAttributes, FC} from 'react';
import {ComponentProps} from "shared/types/ComponentProps";
import cls from "./Button.module.scss";
import {classNames} from "shared/lib/classNames";

export enum ThemeButton {
    CLEAR = 'clear',
    SIMPLE = 'simple'
}

export interface ButtonProps extends ComponentProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProp} = props

    return (
        <button
            className={classNames(
                cls.button,
                {},
                [className, cls[theme]]
            )}
            {...otherProp}
        >
            {children}
        </button>
    );
};

export default Button;