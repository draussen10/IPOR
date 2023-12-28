import type {Preview} from '@storybook/react'
import {styleDecorator} from 'shared/config/storybook/Decorators/styleDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {themeDecorator} from 'shared/config/storybook/Decorators/themeDecorator'
import i18n from 'shared/config/i18n/i18n'
import {routeDecorator} from 'shared/config/storybook/Decorators/routeDecorator'

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
        locale: 'ru',
        locales: {
            en: 'English',
            ru: 'Russian'
        }
    },

    decorators: [
        styleDecorator,
        themeDecorator(Theme.DARK),
        routeDecorator
    ],
}

export default preview
