import {Decorator} from '@storybook/react'
import React from 'react'
import {Theme} from 'app/providers/ThemeProvider'

export const themeDecorator = (theme: Theme) => {
    const Decorator: Decorator = (Story) => {
        return (
            <div className={`app ${theme}`}>
                <Story/>
            </div>
        )
    }
    return Decorator
}
