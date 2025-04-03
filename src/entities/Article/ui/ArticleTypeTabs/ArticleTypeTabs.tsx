import {type FC, memo, useCallback, useMemo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch';
import {useTranslation} from 'react-i18next';
import {type TabItem, Tabs} from '@/shared/ui/Tabs/Tabs';
import {articlesPageActions, fetchArticlesList, getArticlesPageType} from '@/pages/ArticlesPage';
import {ArticleType} from '../../model/types/article';
import {useSelector} from 'react-redux';

interface ArticleTypeTabsProps {
    className?: string
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const typeTabs = useMemo(
        () => Object.values(ArticleType)
            .reduce((acc: TabItem[], type) => ([
                ...acc,
                {
                    value: type,
                    title: t(type)
                }
            ]), [])
        , [t]);

    const {
        className
    } = props;

    const type = useSelector(getArticlesPageType);

    const onChangeType = useCallback((tab: TabItem) => {
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticlesList({replace: true}));
    }, [dispatch]);

    return (
        <Tabs
            tabs={typeTabs}
            value={type}
            onTabClick={onChangeType}
            className={classNames('', {}, [className])}
        />
    );
});
