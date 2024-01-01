import {fireEvent, screen} from '@testing-library/react'
import Sidebar from './Sidebar'
import {componentRender} from 'shared/config/tests/componentRender'

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        }
    },
    initReactI18next: {
        type: '3rdParty',
        init: () => {},
    }
}))

describe('Sidebar', () => {
    test('getByTestId', () => {
        componentRender(<Sidebar></Sidebar>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Hovering', () => {
        componentRender(<Sidebar></Sidebar>)
        expect(screen.getByTestId('sidebar')).toHaveStyle('width: var(--sidebar-width-collapsed)')
        fireEvent.mouseEnter(screen.getByTestId('sidebar'))
        expect(screen.getByTestId('sidebar')).toHaveStyle('width: var(--sidebar-width)')

    })
})