import {StarRating} from './StarRating';
import {type Meta, type StoryObj} from '@storybook/react';

const meta: Meta<typeof StarRating> = {
    component: StarRating,
    title: 'shared/StarRating'
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Light: Story = {};
