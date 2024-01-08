import type {Meta, StoryObj} from '@storybook/react'
import {themeDecorator} from 'shared/config/storybook/Decorators/themeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import Modal from 'shared/ui/Modal/Modal'

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>;

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'ContentModal'
    },
    decorators: [themeDecorator(Theme.DARK)]
}

export const Light: Story = {
    args: {isOpen: true, children: 'ContentModal'},
    decorators: [themeDecorator(Theme.LIGHT)]
}