import {type FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Currency} from '../model/types/currency';
import styles from 'entities/Profile/ui/ProfileCard/ProfileCard.m.scss';
import {Select} from 'shared/ui/Select/Select';

const currencyList = (Object.keys(Currency) as Array<keyof typeof Currency>).map((key) => ({
    value: Currency[key],
    title: Currency[key]
}));

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
    const {t} = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames(styles.currencySelect, {}, [className])}
            value={value}
            options={currencyList}
            label={t('currency')}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
