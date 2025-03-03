import {type FC, memo, type ReactNode, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Tabs.m.scss';
import {Card, CardTheme} from '../Card/Card';

export interface TabItem {
    value: string
    title: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = memo((props) => {
    const {
        className,
        tabs,
        onTabClick,
        value
    } = props;

    const clickHandle = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab);
        };
    }, [onTabClick]);

    return (
        <div className={classNames(styles.tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    className={styles.tab}
                    key={tab.value}
                    theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={clickHandle(tab)}
                >
                    {tab.title}
                </Card>
            ))}
        </div>
    );
});
