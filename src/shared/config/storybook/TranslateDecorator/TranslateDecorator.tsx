import {type StoryFn} from '@storybook/react';
import {I18nextProvider} from 'react-i18next';
import i18nForTests from '../../i18n/i18nForTests';
import {Suspense} from 'react';

export const TranslateDecorator = (StoryComponent: StoryFn) => (
    <I18nextProvider i18n={i18nForTests}>
        <Suspense fallback=''>
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
);
