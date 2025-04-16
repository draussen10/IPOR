import {Dropdown} from './Dropdown';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Button} from '../../../Button/Button';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    title: 'shared/Dropdown'
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                title: 'first',
                disabled: true
            },
            {
                title: 'second'
            },
            {
                title: 'third'
            },
            {
                title: 'forth'
            },
            {
                title: 'five',
                disabled: true
            }
        ]
    }
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
