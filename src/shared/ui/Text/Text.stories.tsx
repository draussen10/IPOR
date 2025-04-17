import {Text, TextSize, TextTheme} from './Text';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/const/theme';

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

export const Size_M: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.M
    }
};

export const Size_L: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.L
    }
};

export const Size_XL: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.XL
    }
};
