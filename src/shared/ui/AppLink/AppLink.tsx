import React, {FC} from 'react';
import cls from './AppLink.module.scss'
import {ComponentProps} from "shared/types/ComponentProps";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/classNames";

export interface AppLinkProps extends LinkProps, ComponentProps {
}

const AppLink: FC<AppLinkProps> = ({className, children, to, ...otherProps}) => {
    return (
        <Link
            className={classNames(
                cls.AppLink,
                {},
                [className]
            )}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;