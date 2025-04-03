import {ThemeSwitcher} from './ThemeSwitcher';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';

const meta: Meta<typeof ThemeSwitcher> = {
    component: ThemeSwitcher,
    title: 'widget/ThemeSwitcher'
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
