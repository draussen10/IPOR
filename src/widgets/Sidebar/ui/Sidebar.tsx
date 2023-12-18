import React, {FC, useState} from 'react';
import cls from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames";
import {ComponentProps} from "shared/types/ComponentProps";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export interface SidebarProps extends ComponentProps {
}

const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(
            cls.sidebar,
            {[cls.collapsed]: collapsed},
            [className]
        )}>

            <button
                onClick={onToggle}
            >
                Toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            {/*    Language Switcher*/}
            </div>
        </div>
    );
};

export default Sidebar;