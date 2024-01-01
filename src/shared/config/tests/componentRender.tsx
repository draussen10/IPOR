import {MemoryRouter} from 'react-router-dom'
import {ReactNode} from 'react'
import { render } from '@testing-library/react'

export interface componentRenderOptions {
    route?: string
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            {component}
        </MemoryRouter>
    )
}