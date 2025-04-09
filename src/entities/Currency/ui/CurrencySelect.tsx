import {type FC, memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {Currency} from '../model/types/currency';
import {ListBox} from '@/shared/ui/Popups';

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
        <ListBox
            label={t('currency')}
            className={className}
            value={value}
            defaultValue={'Выберите валюту'}
            items={currencyList}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
