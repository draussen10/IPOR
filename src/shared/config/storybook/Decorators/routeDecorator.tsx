import {Decorator} from '@storybook/react'
import '../../../../app/styles/index.scss'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

export const routeDecorator: Decorator = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
)

