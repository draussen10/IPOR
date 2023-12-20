import React from 'react'
import cls from './NotFoundPage.module.scss'
import {useTranslation} from 'react-i18next'

const NotFoundPage = () => {
    const [t, ] = useTranslation()

    return (
        <div className={cls.notFoundPage}>
            {`Error 404. ${t('Page not found')}`}
        </div>
    )
}

export default NotFoundPage