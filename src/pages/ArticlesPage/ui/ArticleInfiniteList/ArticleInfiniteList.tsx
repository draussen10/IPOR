import {type FC, memo} from 'react';
import {ArticleList} from '@/entities/Article';
import {useSelector} from 'react-redux';
import {getArticles} from '../../model/slice/articlesPageSlice';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView
} from '../../model/selectors/articlesPageSelector';
import {Text, TextAlign} from '@/shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo((props) => {
    const {t} = useTranslation('pages/articles');
    const articles = useSelector(getArticles.selectAll);
    const articles1 = useSelector(getArticles.selectEntities);
    console.log(articles1);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);

    if (error) {
        return (
            <Text title={t('ArticlesPageTextError')} align={TextAlign.CENTER} />
        );
    }

    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view}
        />
    );
});
