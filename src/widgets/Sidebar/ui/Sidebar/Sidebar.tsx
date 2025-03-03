import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.m.scss';
import {memo, useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {SidebarItem} from '../SidebarItem/SidebarItem';
import {useSelector} from 'react-redux';
import {getSidebarItems} from '../../model/selectors/getSidebarItems';
import {VStack} from 'shared/ui/Stack/VStack/VStack';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <menu
            data-testid="sidebar"
            className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}
        >
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
            <Button
                square
                size={ButtonSize.L}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapsedBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <VStack gap={'8'} align={'start'} className={styles.items}>
                {sidebarItemsList.map(item => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
        </menu>
    );
});
