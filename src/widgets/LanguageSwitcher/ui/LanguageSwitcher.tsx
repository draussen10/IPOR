import React,{ FC } from 'react'
import cls from './LanguageSwitcher.module.scss'
import {ComponentProps} from 'shared/types/ComponentProps'
import {Button, ThemeButton} from 'shared/ui/Button'
import {useTranslation} from 'react-i18next'

export interface LanguageSwitcherProps extends ComponentProps {}

const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
    const {t, i18n} = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.SIMPLE}
            className={cls.languageSwitcher}
            onClick={toggleLanguage}
        >
            {t('Language')}
        </Button>
    )
}

export default LanguageSwitcher