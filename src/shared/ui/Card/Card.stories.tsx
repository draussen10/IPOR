import {Card} from './Card';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Text} from '../Text/Text';

const meta: Meta<typeof Card> = {
    component: Card,
    title: 'shared/Card'
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Light: Story = {
    args: {
        children: <Text title={'Title'} text={'Text'} />
    }
};

export const Dark: Story = {
    args: {
        children: <Text title={'Title'} text={'Text'} />
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
