import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import {ArticleList} from '@/entities/Article';
import {Text, TextSize} from '@/shared/ui/Text';
import {VStack} from '@/shared/ui/Stack';
import {useArticleRecommendationList} from '../../api/articleRecommendationsApi';

interface ArticleRecommendationListProps {
    className?: string
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {data: articles, isLoading, error} = useArticleRecommendationList(3);

    if (error) {
        return null;
    }

    return (
        <VStack gap='8' className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('recommendationsTitle')}
            />
            <ArticleList
                articles={articles || []}
                isLoading={isLoading}
                target={'_blank'}
            />
        </VStack>
    );
});
