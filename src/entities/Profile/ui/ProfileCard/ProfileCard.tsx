import {type FC} from 'react';
import {classNames, type Mods} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './ProfileCard.module.scss';
import {Text, TextAlign, TextTheme} from '@/shared/ui/Text';
import {Input} from '@/shared/ui/Input';
import {type Profile} from '../../model/types/profile';
import {Loader} from '@/shared/ui/Loader';
import {Avatar} from '@/shared/ui/Avatar';
import {type Currency, CurrencySelect} from '@/entities/Currency';
import {type Country, CountrySelect} from '@/entities/Country';
import {HStack, VStack} from '@/shared/ui/Stack';

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
            <HStack justify={'center'} max className={classNames(styles.profileCard, {}, [className, styles.loading])}>
                <Loader/>
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify={'center'} max className={classNames(styles.profileCard, {}, [className, styles.error])}>
                <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title={t('loadingError')} text={t('tryReload')}/>
            </HStack>
        );
    }

    const mods: Mods = {
        [styles.readonly]: readonly
    };

    return (
        <VStack max gap={'16'} className={classNames(styles.profileCard, mods, [className])}>
            <HStack max justify={'center'}>{data?.avatar && <Avatar src={data?.avatar}/>}</HStack>
            <Input
                className={styles.input}
                value={data?.firstname}
                label={t('firstname')}
                readonly={readonly}
                onChange={onChangeFirstname}
                data-testid={'ProfileCard.firstname'}
            />
            <Input
                className={styles.input}
                value={data?.lastname}
                label={t('lastname')}
                readonly={readonly}
                onChange={onChangeLastname}
                data-testid={'ProfileCard.lastname'}
            />

            <Input
                className={styles.input}
                type={'number'}
                value={data?.age}
                label={t('age')}
                readonly={readonly}
                onChange={onChangeAge}
                data-testid={'ProfileCard.age'}
            />

            <Input
                className={styles.input}
                value={data?.city}
                label={t('city')}
                readonly={readonly}
                onChange={onChangeCity}
                data-testid={'ProfileCard.city'}
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
                data-testid={'ProfileCard.username'}
            />

            <Input
                className={styles.input}
                value={data?.avatar}
                label={t('avatar')}
                readonly={readonly}
                onChange={onChangeAvatar}
                data-testid={'ProfileCard.avatar'}
            />
        </VStack>
    );
};
