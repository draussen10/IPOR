import React from 'react'
import classes from './Navbar.module.scss'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/classNames'
import {ComponentProps} from 'shared/types/ComponentProps'
import AppLink from 'shared/ui/AppLink/AppLink'

interface NavbarProps extends ComponentProps {
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(
            classes.navbar,
            {},
            [className]
        )}>

            <div className={classes.links}>
                <AppLink to={RoutePath.main}>Main</AppLink>
                <AppLink to={RoutePath.about}>About</AppLink>
            </div>
        </div>
    )
}

export default Navbar