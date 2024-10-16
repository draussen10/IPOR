import {Navbar} from './Navbar';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widget/Navbar'
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
