import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './AppLink.m.scss';
import {Link, type LinkProps} from 'react-router-dom';
import {type FC, memo} from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...linkProps
    } = props;

    return (
        <Link
            className={classNames(styles.appLink, {}, [className, styles[theme]])}
            {...linkProps}
        >
            {children}
        </Link>
    );
});
