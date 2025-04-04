import {type FC, type InputHTMLAttributes, memo, type ReactNode, useEffect, useRef} from 'react';
import {classNames, type Mods} from '@/shared/lib/classNames/classNames';
import styles from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    label?: ReactNode
    autofocus?: boolean
    readonly?: boolean
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        autofocus,
        readonly,
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

    const mods: Mods = {
        [styles.readonly]: readonly
    };

    return (
        <div className={classNames(styles.inputWrapper, mods, [className])}>
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
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
