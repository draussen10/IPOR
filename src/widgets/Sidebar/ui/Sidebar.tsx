import React, {FC} from 'react'
import cls from './Sidebar.module.scss'
import {classNames} from 'shared/lib/classNames'
import {ComponentProps} from 'shared/types/ComponentProps'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LanguageSwitcher} from 'widgets/LanguageSwitcher'

export interface SidebarProps extends ComponentProps {
}

const Sidebar: FC<SidebarProps> = ({className}) => {
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.sidebar,
                {},
                [className]
            )}>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}

export default Sidebar