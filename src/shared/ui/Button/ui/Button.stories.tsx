import type {Meta, StoryObj} from '@storybook/react'
import {Button, ThemeButton} from 'shared/ui/Button'
import {themeDecorator} from 'shared/config/storybook/Decorators/themeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Button',
    },
}

export const Simple: Story = {
    args: {
        theme: ThemeButton.SIMPLE,
        children: 'Button',
    },
}

export const Outlined_Light: Story = {
    args: {
        theme: ThemeButton.OUTLINED,
        children: 'Button',
    },
    decorators: [themeDecorator(Theme.LIGHT)]
}

export const Outlined_Dark: Story = {
    args: {
        theme: ThemeButton.OUTLINED,
        children: 'Button',
    },
    decorators: [themeDecorator(Theme.DARK)]
}

export const Background: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: 'Button',
    },
}

export const Background_Inverted: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: 'Button',
    },
}
