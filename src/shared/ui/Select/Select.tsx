import {type ChangeEvent, useMemo} from 'react';
import {classNames, type Mods} from '@/shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOption {
    title: string
    value: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

export const Select = <T extends string> (props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly
    } = props;

    const optionList = useMemo(() => {
        return options?.map(({title, value}) => <option key={value} value={value} className={styles.option}>{title}</option>);
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const mods: Mods = {
        [styles.readonly]: readonly
    };

    return (
        <div className={classNames('', mods, [className])}>
            {label && (
                <span className={styles.label}>
                    {label}
                </span>
            )}

            <select disabled={readonly} className={styles.select} value={value} onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    );
};
