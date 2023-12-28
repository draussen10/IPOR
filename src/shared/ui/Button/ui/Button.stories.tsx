import type {Meta, StoryObj} from '@storybook/react'
import {Sidebar, ThemeButton} from 'shared/ui/Button'
import {themeDecorator} from 'shared/config/storybook/Decorators/themeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

const meta: Meta<typeof Sidebar> = {
    title: 'shared/Button',
    component: Sidebar,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sidebar>;

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
