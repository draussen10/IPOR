import type {Meta, StoryObj} from '@storybook/react'
import {MainPage} from 'pages/MainPage'


const meta: Meta<typeof MainPage> = {
    title: 'shared/Button',
    component: MainPage,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MainPage>;

export const Main: Story = {
    args: {},
}
