import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './PageError.module.scss';
import {useTranslation} from 'react-i18next';

interface PageErrorProps {
    className?: string
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            <p>{t('error')}</p>
            <button onClick={reload}>
                {t('reload')}
            </button>
        </div>
    );
};
