import {type FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useTranslation} from 'react-i18next';
import {Text, TextSize} from 'shared/ui/Text/Text';
import {AddCommentForm} from 'features/addCommentForm';
import {CommentList} from 'entities/Comment';
import {useSelector} from 'react-redux';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading
} from '../../model/selectors/commets';
import {getArticleComments} from '../../model/slice/articleDetailsCommentsSlice';
import {addCommentForArticle} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {VStack} from 'shared/ui/Stack';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect';

interface ArticleDetailsCommentsProps {
    id?: string
    className?: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const isLoadingComments = useSelector(getArticleDetailsCommentsIsLoading);
    const errorComments = useSelector(getArticleDetailsCommentsError);
    const dataComments = useSelector(getArticleComments.selectAll);

    const {
        className,
        id
    } = props;

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('commentTitle')} />
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList
                comments={dataComments}
                isLoading={isLoadingComments}
                error={errorComments}
            />
        </VStack>
    );
});
