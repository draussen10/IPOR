import {render, screen} from '@testing-library/react'
import {Sidebar, ThemeButton} from 'shared/ui/Button'

describe('Button', () => {
    test('Clear Button', () => {
        render(<Sidebar theme={ThemeButton.CLEAR}>Test</Sidebar>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})