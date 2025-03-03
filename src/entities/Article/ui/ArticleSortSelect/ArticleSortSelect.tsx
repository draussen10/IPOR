import {type FC, memo, useMemo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './ArticleSortSelect.m.scss';
import {Select, type SelectOption} from 'shared/ui/Select/Select';
import {ArticleSortField} from '../../model/types/article';
import {type SortOrder} from 'shared/types';

interface ArticleSortSelectProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelect: FC<ArticleSortSelectProps> = memo((props) => {
    const {t} = useTranslation();

    const {
        className,
        sort,
        onChangeSort,
        order,
        onChangeOrder
    } = props;

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            title: t('asc')
        },
        {
            value: 'desc',
            title: t('desc')
        }
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
        {
            value: ArticleSortField.TITLE,
            title: t('title')
        },
        {
            value: ArticleSortField.CREATED,
            title: t('date')
        },
        {
            value: ArticleSortField.VIEWS,
            title: t('views')
        }
    ], [t]);

    return (
        <div className={classNames(styles.articleSortSelect, {}, [className])}>
            <Select label={t('Sort by')} options={sortFieldOptions} value={sort} onChange={onChangeSort} />
            <Select label={t('order by')} options={orderOptions} value={order} onChange={onChangeOrder} />
        </div>
    );
});
