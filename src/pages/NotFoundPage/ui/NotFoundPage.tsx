import {classNames} from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.m.scss';
import {useTranslation} from 'react-i18next';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.notFoundPage, {}, [className])}>
            {t('notFoundText')}
        </div>
    );
};
