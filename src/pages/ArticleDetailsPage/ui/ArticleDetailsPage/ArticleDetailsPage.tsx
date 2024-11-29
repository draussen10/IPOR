import {type FC, memo, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './ArticleDetailsPage.m.scss';
import {ArticleDetails} from 'entities/Article';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from 'entities/Article/model/selectrors/getArticleDetails';
import {type ReducerList, useReducerManager} from 'app/providers/StoreProvider/lib/useReducerManager';
import {fetchArticleById} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer
};

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {t} = useTranslation('pages/article');
    const {id} = useParams<{ id: string }>();
    const {className} = props;
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    useReducerManager(reducers, true);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            id && dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <div className={classNames(styles.articleDetailsPage, {}, [className])}>
                {t('articleNotFound')}
            </div>
        );
    }

    return (
        <div className={classNames(styles.articleDetailsPage, {}, [className])}>
            <ArticleDetails
                data={data}
                error={error}
                isLoading={isLoading}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
