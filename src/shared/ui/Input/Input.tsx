import {type FC, type InputHTMLAttributes, memo, type ReactNode, useEffect, useRef} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Input.m.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string
    value?: string
    onChange?: (value: string) => void
    label?: ReactNode
    autofocus?: boolean
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        autofocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(styles.inputWrapper, {}, [className])}>
            {label && (
                <div className={styles.label}>
                    {label}
                </div>
            )}

            <input
                ref={ref}
                type={type}
                className={styles.input}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
