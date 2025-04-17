import type { Preview } from '@storybook/react';
import {StyleDecorator} from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {RouterDecorator} from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import {TranslateDecorator} from '@/shared/config/storybook/TranslateDecorator/TranslateDecorator';
import {PaddingDecorator} from "@/shared/config/storybook/PaddingDecorator/PaddingDecorator";
import { withThemeByClassName } from '@storybook/addon-themes';
import {Theme} from "@/shared/const/theme";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        layout: 'fullscreen'
    },
    decorators: [
        StyleDecorator,
        // ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        TranslateDecorator,
        PaddingDecorator,
        withThemeByClassName({
            themes: {
                light: 'app ' + Theme.LIGHT,
                dark: 'app ' + Theme.DARK
            },
            defaultTheme: 'light'
        }),
    ]
};

export default preview;
