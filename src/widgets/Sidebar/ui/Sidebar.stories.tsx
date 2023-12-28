import type {Meta, StoryObj} from '@storybook/react'
import {Sidebar} from 'widgets/Sidebar'
import {themeDecorator} from 'shared/config/storybook/Decorators/themeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import cls from './Sidebar.module.scss'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {className: cls.notFixed},
    decorators: [themeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
    args: {className: cls.notFixed},
    decorators: [themeDecorator(Theme.DARK)]
}

