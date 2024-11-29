import {type FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.m.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(styles.articlesPage, {}, [className])}>
            ARTICLES_PAGE
        </div>
    );
};

export default memo(ArticlesPage);
