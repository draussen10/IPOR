import {type FC, memo, useMemo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {type TabItem, Tabs} from '@/shared/ui/Tabs';
import {ArticleType} from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props) => {
    const {t} = useTranslation();

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
        className,
        value,
        onChangeType
    } = props;

    const onTabClickHandler = (tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    };

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClickHandler}
            className={classNames('', {}, [className])}
        />
    );
});
