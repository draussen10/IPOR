import {Modal} from './Modal';
import {type Meta, type StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: 'shared/Modal'
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut fuga fugiat, impedit in inventore laboriosam laudantium molestias, natus neque nulla quos, vero voluptate. A ab accusamus adipisci animi architecto atque, consectetur consequatur delectus eos, est ipsam itaque numquam, perspiciatis porro provident qui quibusdam quidem quod repudiandae sit ut vel voluptates. Asperiores aspernatur assumenda corporis cumque eius, eligendi eos eum explicabo iure iusto non odit porro provident quod similique sit tempora vitae voluptates! Animi esse excepturi exercitationem facere harum itaque minima necessitatibus neque possimus qui similique, sit veniam vitae. Accusamus aliquam aut beatae dolor itaque nulla recusandae repellendus vel voluptate?'
    }
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut fuga fugiat, impedit in inventore laboriosam laudantium molestias, natus neque nulla quos, vero voluptate. A ab accusamus adipisci animi architecto atque, consectetur consequatur delectus eos, est ipsam itaque numquam, perspiciatis porro provident qui quibusdam quidem quod repudiandae sit ut vel voluptates. Asperiores aspernatur assumenda corporis cumque eius, eligendi eos eum explicabo iure iusto non odit porro provident quod similique sit tempora vitae voluptates! Animi esse excepturi exercitationem facere harum itaque minima necessitatibus neque possimus qui similique, sit veniam vitae. Accusamus aliquam aut beatae dolor itaque nulla recusandae repellendus vel voluptate?'
    },
    decorators: ThemeDecorator(Theme.DARK)
};
