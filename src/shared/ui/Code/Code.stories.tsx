import {Code} from './Code';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof Code> = {
    component: Code,
    title: 'shared/Code'
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Light: Story = {
    args: {
        text: 'import {Code} from \'./Code\';\n' +
            'import {type Meta, type StoryObj} from \'@storybook/react\';\n' +
            'import {ThemeDecorator} from \'shared/config/storybook/ThemeDecorator/ThemeDecorator\';\n' +
            'import {Theme} from \'app/providers/ThemeProvider\';\n' +
            'import {StoreDecorator} from \'shared/config/storybook/StoreDecorator/StoreDecorator\';\n' +
            '\n' +
            'const meta: Meta<typeof Code> = {\n' +
            '    component: Code,\n' +
            '    title: \'shared/Code\'\n' +
            '};\n' +
            '\n' +
            'export default meta;\n' +
            '\n' +
            'type Story = StoryObj<typeof Code>;\n' +
            '\n' +
            'export const Light: Story = {\n' +
            '    args: {\n' +
            '        text: \'\'\n' +
            '    },\n' +
            '    decorators: [StoreDecorator({})]\n' +
            '};\n' +
            '\n' +
            'export const Dark: Story = {\n' +
            '    args: {\n' +
            '        text: \'\'\n' +
            '    },\n' +
            '    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]\n' +
            '};\n'
    },
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    args: {
        text: 'import {Code} from \'./Code\';\n' +
            'import {type Meta, type StoryObj} from \'@storybook/react\';\n' +
            'import {ThemeDecorator} from \'shared/config/storybook/ThemeDecorator/ThemeDecorator\';\n' +
            'import {Theme} from \'app/providers/ThemeProvider\';\n' +
            'import {StoreDecorator} from \'shared/config/storybook/StoreDecorator/StoreDecorator\';\n' +
            '\n' +
            'const meta: Meta<typeof Code> = {\n' +
            '    component: Code,\n' +
            '    title: \'shared/Code\'\n' +
            '};\n' +
            '\n' +
            'export default meta;\n' +
            '\n' +
            'type Story = StoryObj<typeof Code>;\n' +
            '\n' +
            'export const Light: Story = {\n' +
            '    args: {\n' +
            '        text: \'\'\n' +
            '    },\n' +
            '    decorators: [StoreDecorator({})]\n' +
            '};\n' +
            '\n' +
            'export const Dark: Story = {\n' +
            '    args: {\n' +
            '        text: \'\'\n' +
            '    },\n' +
            '    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]\n' +
            '};\n'
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
