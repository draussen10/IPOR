import {type StoryFn} from '@storybook/react';
// eslint-disable-next-line ipor/layer-imports
import {ThemeProvider} from '@/app/providers/ThemeProvider';
import {type Theme} from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
