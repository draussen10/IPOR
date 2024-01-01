import React, {FC} from 'react'
import cls from './Sidebar.module.scss'
import {classNames} from 'shared/lib/classNames'
import {ComponentProps} from 'shared/types/ComponentProps'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LanguageSwitcher} from 'widgets/LanguageSwitcher'
import AppLink from 'shared/ui/AppLink/AppLink'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'

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
            <div className={cls.items}>
                <AppLink to={RoutePath.main} className={cls.item}>
                    <MainIcon className={cls.icon}/>
                    <span  className={cls.link}>Main</span>
                </AppLink>

                <AppLink to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon}/>
                    <span  className={cls.link}>About</span>
                </AppLink>


            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}

export default Sidebar