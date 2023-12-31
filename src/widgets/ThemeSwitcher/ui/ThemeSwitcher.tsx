import React, {FC} from 'react'
import cls from './ThemeSwitcher.module.scss'
import {ComponentProps} from 'shared/types/ComponentProps'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {ThemeButton} from 'shared/ui/Button'
import Button from 'shared/ui/Button/ui/Button'

export interface ThemeSwitcherProps extends ComponentProps {}



const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={cls.themeSwitchers}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    )
}

export default ThemeSwitcher