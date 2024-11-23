import {CountrySelect} from './CountrySelect';
import {type Meta, type StoryObj} from '@storybook/react';

const meta: Meta<typeof CountrySelect> = {
    component: CountrySelect,
    title: 'entities/CountrySelect'
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
    args: {}
};
