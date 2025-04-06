import {type FC, memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {RatingCard} from '@/entities/Rating';
import {useArticleRating, useRateArticle} from '../../api/articleRatingApi';
import {getUserAuthData} from '@/entities/User';
import {useSelector} from 'react-redux';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';

interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
    const {
        className,
        articleId
    } = props;

    const {t} = useTranslation();
    const userData = useSelector(getUserAuthData);
    const userId = userData?.id ?? '';
    const {data, isLoading} = useArticleRating({articleId, userId});
    const [rateArticleMutation] = useRateArticle();
    const rating = data?.[0];

    const handleRateArticle = useCallback((starCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                articleId,
                userId,
                rate: starCount,
                feedback
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userId]);

    const onCancel = useCallback((starCount: number) => {
        handleRateArticle(starCount);
    }, [handleRateArticle]);

    const onAccept = useCallback((starCount: number, feedback?: string) => {
        handleRateArticle(starCount, feedback);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width='100%' height={120} />;
    }

    return (
        <RatingCard
            hasFeedback
            title={t('Оцените статью')}
            feedbackTitle={t('Напишите отзыв')}
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
            className={className}
        />
    );
});

export default ArticleRating;
