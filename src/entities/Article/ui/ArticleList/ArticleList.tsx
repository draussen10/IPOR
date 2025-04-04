import {type FC, type HTMLAttributeAnchorTarget, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticleList.module.scss';
import {type Article, ArticleView} from '../../model/types/article';
import {ArticleListItem} from '../ArticleListItem/ArticleListItem';
import {ArticleListItemSkeleton} from '../ArticleListItem/ArticleListItemSkeleton';
import {Text, TextSize} from '@/shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.BIG ? 3 : 9)
        .fill(0)
        .map((_, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
        ));
};

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target
    } = props;

    const {t} = useTranslation('pages/articles');

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                target={target}
            />
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.articleList, {}, [styles[view], className])}>
                <Text size={TextSize.L} text={t('articlesNotFound')} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.articleList, {}, [styles[view], className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});
