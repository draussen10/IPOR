import {ListBox} from './ListBox';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ListBox> = {
    component: ListBox,
    title: 'shared/ListBox',
    args: {
        defaultValue: 'Выберите значение',
        value: '2',
        onChange: (value: string) => {},
        items: [
            {
                title: '1',
                value: '1',
                disabled: true
            },
            {
                title: '2',
                value: '2'
            },
            {
                title: '3',
                value: '3'
            },
            {
                title: '4',
                value: '4'
            }
        ]
    }
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Light: Story = {
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
