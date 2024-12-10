import {type FC, memo, useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Text} from 'shared/ui/Text/Text';
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
import {CommentList} from 'entities/Comment';
import {articleDetailsCommentsReducer, getArticleComments} from '../../model/slice/articleDetailsCommentsSlice';
import {getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading} from '../../model/selectors/commets';
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {AddCommentForm} from 'features/addCommentForm';
import {addCommentForArticle} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer
};

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {t} = useTranslation('pages/article');
    const {id} = useParams<{ id: string }>();
    const {className} = props;
    const dispatch = useAppDispatch();

    const isLoadingArticle = useSelector(getArticleDetailsIsLoading);
    const errorArticle = useSelector(getArticleDetailsError);
    const dataArticle = useSelector(getArticleDetailsData);

    const isLoadingComments = useSelector(getArticleDetailsCommentsIsLoading);
    const errorComments = useSelector(getArticleDetailsCommentsError);
    const dataComments = useSelector(getArticleComments.selectAll);

    useReducerManager(reducers, true);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
            dispatch(fetchCommentsByArticleId(id));
        }
    }, [dispatch, id]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

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
                data={dataArticle}
                error={errorArticle}
                isLoading={isLoadingArticle}
            />
            <Text className={styles.commentTitle} title={t('commentTitle')} />
            <AddCommentForm
                onSendComment={onSendComment}
            />
            <CommentList
                comments={dataComments}
                isLoading={isLoadingComments}
                error={errorComments}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
