import {Text, TextTheme} from './Text';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    component: Text,
    title: 'shared/Text'
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text'
    }
};

export const Primary_Dark: Story = {
    args: {
        title: 'Title',
        text: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title'
    }
};

export const OnlyTitle_Dark: Story = {
    args: {
        title: 'Title'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyText: Story = {
    args: {
        text: 'Text'
    }
};

export const OnlyText_Dark: Story = {
    args: {
        text: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR
    }
};
