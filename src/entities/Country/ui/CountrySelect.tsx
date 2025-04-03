import {type FC, memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from '@/entities/Profile/ui/ProfileCard/ProfileCard.m.scss';
import {Select} from '@/shared/ui/Select/Select';
import {Country} from '../model/types/country';

const countryList = (Object.keys(Country) as Array<keyof typeof Country>).map((key) => ({
    value: Country[key],
    title: Country[key]
}));

interface CurrencySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

export const CountrySelect: FC<CurrencySelectProps> = memo((props) => {
    const {t} = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames(styles.currencySelect, {}, [className])}
            value={value}
            options={countryList}
            label={t('country')}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
