import {type FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './ArticleDetailsPage.m.scss';
import {ArticleDetails} from 'entities/Article';
import {useParams} from 'react-router-dom';
import {type ReducerList, useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';
import {Page} from 'widgets/Page/Page';
import {articleDetailsPageReducer} from '../../model/slice';
import {ArticleDetailsPageHeader} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {ArticleRecommendationList} from 'features/articleRecommendationList';
import {ArticleDetailsComments} from '../ArticleDetailsComments/ArticleDetailsComments';

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
};

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {t} = useTranslation('pages/article');
    const {id} = useParams<{ id: string }>();
    const {className} = props;

    useReducerManager(reducers, true);

    if (!id) {
        return (
            <div className={classNames(styles.articleDetailsPage, {}, [className])}>
                {t('articleNotFound')}
            </div>
        );
    }

    return (
        <Page className={classNames(styles.articleDetailsPage, {}, [className])}>
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <ArticleRecommendationList />
            <ArticleDetailsComments id={id} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
