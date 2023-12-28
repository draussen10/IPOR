import type {Meta, StoryObj} from '@storybook/react'
import {themeDecorator} from 'shared/config/storybook/Decorators/themeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {MainPage} from 'pages/MainPage'

const meta: Meta<typeof MainPage> = {
    title: 'pages/Main',
    component: MainPage,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MainPage>;

export const Dark: Story = {
    args: {},
    decorators: [themeDecorator(Theme.DARK)]
}

export const Light: Story = {
    args: {},
    decorators: [themeDecorator(Theme.LIGHT)]
}