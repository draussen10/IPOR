module.exports = (layer, componentName) => `
import {type Meta, type StoryObj} from '@storybook/react';

import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
    component: ${componentName},
    title: '${layer}/${componentName}'
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Primary: Story = {
    args: {}
}`;
