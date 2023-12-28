import type {Meta, StoryObj} from '@storybook/react'
import {Navbar} from 'widgets/Navbar'
import {themeDecorator} from 'shared/config/storybook/Decorators/themeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import classes from './Navbar.module.scss'

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Navbar>;

export const Dark: Story = {
    args: {className: classes.notFixed},
    decorators: [themeDecorator(Theme.DARK)]
}

export const Light: Story = {
    args: {className: classes.notFixed},
    decorators: [themeDecorator(Theme.LIGHT)]
}