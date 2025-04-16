import {Button, ButtonSize, ButtonTheme} from './Button';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button'
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text'
    }
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Text'
    }
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Text'
    }
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Text'
    }
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Text'
    }
};

export const InvertedBackground: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Text'
    }
};

export const Square: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: '>',
        square: true
    }
};

export const Size_M: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Text',
        size: ButtonSize.M
    }
};

export const Size_L: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Text',
        size: ButtonSize.L
    }
};

export const Size_XL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Text',
        size: ButtonSize.XL
    }
};

export const Disabled: Story = {
    args: {
        children: 'Text',
        disabled: true
    }
};
