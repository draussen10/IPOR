import {type StoryFn} from '@storybook/react';
export const PaddingDecorator = (StoryComponent: StoryFn) => (
    <div style={{padding: 10}}>
        <StoryComponent />
    </div>
);
