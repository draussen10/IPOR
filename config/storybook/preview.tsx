import type {Decorator, Preview} from '@storybook/react'
import {styleDecorator} from 'shared/config/storybook/Decorators/styleDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {themeDecorator} from 'shared/config/storybook/Decorators/themeDecorator'
import i18n from 'shared/config/i18n/i18n'

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        i18n,
        locale: 'en',
        locales: {
            en: 'English',
            ru: 'Russian'
        }
    },

    decorators: [
        styleDecorator,
        themeDecorator(Theme.DARK),
    ],
}

export default preview
