import {type FC, memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Code.m.scss';
import {Button, ButtonTheme} from '../Button/Button';
import {Icon} from '../Icon/Icon';
import CoryIcon from '@/shared/assets/icons/copy-20-20.svg';

interface CodeProps {
    className?: string
    text: string
}

export const Code: FC<CodeProps> = memo((props) => {
    const {
        className,
        text
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, []);

    return (
        <pre className={classNames(styles.code, {}, [className])}>
            <Button
                className={styles.copyBtn}
                onClick={onCopy}
                theme={ButtonTheme.CLEAR}
            >
                <Icon Svg={CoryIcon} className={styles.copyIcon} />
            </Button>

            <code >
                {text}
            </code>
        </pre>
    );
});
