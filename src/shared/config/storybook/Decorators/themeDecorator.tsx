import {Decorator} from '@storybook/react'
import React from 'react'
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider'

export const themeDecorator = (theme: Theme) => {
    const Decorator: Decorator = (Story) => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <Story/>
                </div>
            </ThemeProvider>
        )
    }
    return Decorator
}
