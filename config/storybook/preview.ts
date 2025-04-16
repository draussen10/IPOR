import type { Preview } from '@storybook/react';
import {StyleDecorator} from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {RouterDecorator} from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import {TranslateDecorator} from '@/shared/config/storybook/TranslateDecorator/TranslateDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, TranslateDecorator]
};

export default preview;
