import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    className?: string
    inverted?: boolean
}

export const Icon: FC<IconProps> = memo((props) => {
    const {
        className,
        Svg,
        inverted,
        ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(styles.icon, {[styles.inverted]: inverted}, [className])}
            {...otherProps}
        />
    );
});
