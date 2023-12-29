import React, {Suspense} from 'react'
import {useTranslation} from 'react-i18next'
import { MainPage } from 'shared/ui/Button'
import cls from './ErrorPanel.module.scss'

const ErrorPanel = () => {
    const {t} = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <Suspense fallback={<></>}>
            <div className={cls.errorPanel}>
                <p>{t('errorText')}</p>
                <MainPage onClick={reloadPage}>
                    {t('refreshPage')}
                </MainPage>
            </div>
        </Suspense>
    )
}

export default ErrorPanel