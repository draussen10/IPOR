import {ListBox} from './ListBox';
import {type Meta, type StoryObj} from '@storybook/react';

const meta: Meta<typeof ListBox> = {
    component: ListBox,
    title: 'shared/ListBox',
    args: {
        defaultValue: 'Выберите значение',
        value: '2',
        onChange: (value: string) => {},
        items: [
            {
                title: 'first',
                value: '1',
                disabled: true
            },
            {
                title: 'second',
                value: '2'
            },
            {
                title: 'third',
                value: '3'
            },
            {
                title: 'fourth',
                value: '4'
            }
        ]
    },
    decorators: [(Story) => <div style={{padding: 100}}><Story /></div>]
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const topLeft: Story = {
    args: {
        direction: 'top left'
    }
};

export const topRight: Story = {
    args: {
        direction: 'top right'
    }
};

export const bottomLeft: Story = {
    args: {
        direction: 'bottom left'
    }
};

export const bottomRight: Story = {
    args: {
        direction: 'bottom right'
    }
};
