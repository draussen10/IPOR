import {type FC, memo, useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Text, TextSize} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import styles from './ArticleDetailsPage.m.scss';
import {ArticleDetails, ArticleList} from 'entities/Article';
import {useNavigate, useParams} from 'react-router-dom';
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
import {getArticleComments} from '../../model/slice/articleDetailsCommentsSlice';
import {getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading} from '../../model/selectors/commets';
import {fetchCommentsByArticleId} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {AddCommentForm} from 'features/addCommentForm';
import {addCommentForArticle} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {Button} from 'shared/ui/Button/Button';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {Page} from 'widgets/Page/Page';
import {getArticleRecommendations} from '../../model/slice/articleDetailsPageRecommendationsSlice';
import {
    getArticleDetailsPageRecommendationsIsLoading
} from '../../model/selectors/recommendations';
import {
    fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {articleDetailsPageReducer} from '../../model/slice';

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer
};

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {t} = useTranslation('pages/article');
    const {id} = useParams<{ id: string }>();
    const {className} = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isLoadingArticle = useSelector(getArticleDetailsIsLoading);
    const errorArticle = useSelector(getArticleDetailsError);
    const dataArticle = useSelector(getArticleDetailsData);

    const isLoadingComments = useSelector(getArticleDetailsCommentsIsLoading);
    const errorComments = useSelector(getArticleDetailsCommentsError);
    const dataComments = useSelector(getArticleComments.selectAll);

    const isLoadingRecommendations = useSelector(getArticleDetailsPageRecommendationsIsLoading);
    const dataRecommendations = useSelector(getArticleRecommendations.selectAll);

    useReducerManager(reducers, true);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
            dispatch(fetchCommentsByArticleId(id));
            dispatch(fetchArticleRecommendations());
        }
    }, [dispatch, id]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

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
        <Page className={classNames(styles.articleDetailsPage, {}, [className])}>
            <Button onClick={onBackToList}>
                {t('backToList')}
            </Button>

            <ArticleDetails
                data={dataArticle}
                error={errorArticle}
                isLoading={isLoadingArticle}
            />

            <Text size={TextSize.L} className={styles.commentTitle} title={t('recommendationsTitle')} />
            <ArticleList
                articles={dataRecommendations}
                isLoading={isLoadingRecommendations}
                className={styles.recommendations}
                target={'_blank'}
            />

            <Text size={TextSize.L} className={styles.commentTitle} title={t('commentTitle')} />
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList
                comments={dataComments}
                isLoading={isLoadingComments}
                error={errorComments}
            />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
