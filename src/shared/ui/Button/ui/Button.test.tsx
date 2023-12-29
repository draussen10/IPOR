import {render, screen} from '@testing-library/react'
import {Button, ThemeButton} from 'shared/ui/Button'

describe('Button', () => {
    test('Clear Button', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})