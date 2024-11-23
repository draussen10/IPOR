import {Select} from './Select';
import {type Meta, type StoryObj} from '@storybook/react';

const meta: Meta<typeof Select> = {
    component: Select,
    title: 'shared/Select'
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Label для Select',
        options: [
            {
                title: '1',
                value: '1'
            },
            {
                title: '2',
                value: '2'
            },
            {
                title: '3',
                value: '3'
            }
        ]
    }
};
