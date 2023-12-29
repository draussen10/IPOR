import React from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/Button'
import cls from './ErrorPanel.module.scss'

const ErrorPanel = () => {
    const {t} = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={cls.errorPanel}>
            <p>{t('errorText')}</p>
            <Button onClick={reloadPage}>
                {t('refreshPage')}
            </Button>
        </div>
    )
}

export default ErrorPanel