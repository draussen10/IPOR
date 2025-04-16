// eslint-disable-next-line ipor/layer-imports
import '@/app/styles/index.scss';
import {type StoryFn} from '@storybook/react';

export const StyleDecorator = (StoryComponent: StoryFn) => (<StoryComponent />);
