import AddCommentForm from './AddCommentForm';
import {type Meta, type StoryObj} from '@storybook/react';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {fn} from '@storybook/test';

const meta: Meta<typeof AddCommentForm> = {
    component: AddCommentForm,
    title: 'features/AddCommentForm'
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = {
    args: {
        onSendComment: fn()
    },
    decorators: [StoreDecorator({
        addCommentForm: {
            text: 'Text'
        }
    })]
};
