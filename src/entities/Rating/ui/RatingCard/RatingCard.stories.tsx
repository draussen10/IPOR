import {RatingCard} from './RatingCard';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof RatingCard> = {
    component: RatingCard,
    title: 'entities/RatingCard',
    args: {
        title: 'Оставьте оценку',
        hasFeedback: true,
        feedbackTitle: 'Оставьте отзыв'
    }
};

export default meta;

type Story = StoryObj<typeof RatingCard>;

export const Light: Story = {
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
