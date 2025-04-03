import {Flex} from './Flex';
import {type Meta, type StoryObj} from '@storybook/react';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Flex> = {
    component: Flex,
    title: 'shared/Flex'
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    decorators: [StoreDecorator({})],
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )
    }
};

export const RowGap4: Story = {
    decorators: [StoreDecorator({})],
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
        gap: '4'
    }
};

export const RowGap8: Story = {
    decorators: [StoreDecorator({})],
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
        gap: '8'
    }
};

export const RowGap16: Story = {
    decorators: [StoreDecorator({})],
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
        gap: '16'
    }
};

export const RowGap32: Story = {
    decorators: [StoreDecorator({})],
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
        gap: '32'
    }
};

export const Column: Story = {
    decorators: [StoreDecorator({})],
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
        direction: 'column'
    }
};
