import {type FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Icon.m.scss';

interface IconProps {
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    className?: string
}

export const Icon: FC<IconProps> = memo((props) => {
    const {
        className,
        Svg
    } = props;

    return (
        <Svg className={classNames(styles.icon, {}, [className])}/>
    );
});
