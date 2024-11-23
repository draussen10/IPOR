import {type FC} from 'react';
import {classNames, type Mods} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './ProfileCard.m.scss';
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text';
import {Input} from 'shared/ui/Input/Input';
import {type Profile} from '../../model/types/profile';
import {Loader} from 'shared/ui/Loader/Loader';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {type Currency, CurrencySelect} from 'entities/Currency';
import {type Country, CountrySelect} from 'entities/Country';

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCountry?: (value?: Country) => void
    onChangeCurrency?: (value?: Currency) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {t} = useTranslation('profilePage');

    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(styles.profileCard, {}, [className, styles.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.profileCard, {}, [className, styles.error])}>
                <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title={t('loadingError')} text={'tryReload'} />
            </div>
        );
    }

    const mods: Mods = {
        [styles.readonly]: readonly
    };

    return (
        <div className={classNames(styles.profileCard, mods, [className])}>
            <div>
                {data?.avatar && <Avatar src={data?.avatar} />}
                <Input
                    className={styles.input}
                    value={data?.firstname}
                    label={t('firstname')}
                    readonly={readonly}
                    onChange={onChangeFirstname}

                />
                <Input
                    className={styles.input}
                    value={data?.lastname}
                    label={t('lastname')}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />

                <Input
                    className={styles.input}
                    type={'number'}
                    value={data?.age}
                    label={t('age')}
                    readonly={readonly}
                    onChange={onChangeAge}
                />

                <Input
                    className={styles.input}
                    value={data?.city}
                    label={t('city')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />

                <CountrySelect
                    className={styles.input}
                    value={data?.country}
                    readonly={readonly}
                    onChange={onChangeCountry}
                />

                <CurrencySelect
                    className={styles.input}
                    value={data?.currency}
                    readonly={readonly}
                    onChange={onChangeCurrency}
                />

                <Input
                    className={styles.input}
                    value={data?.username}
                    label={t('username')}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />

                <Input
                    className={styles.input}
                    value={data?.avatar}
                    label={t('avatar')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
            </div>
        </div>
    );
};
