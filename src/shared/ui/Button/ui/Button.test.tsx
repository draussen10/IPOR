import {render, screen} from '@testing-library/react'
import {MainPage, ThemeButton} from 'shared/ui/Button'

describe('Button', () => {
    test('Clear Button', () => {
        render(<MainPage theme={ThemeButton.CLEAR}>Test</MainPage>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})