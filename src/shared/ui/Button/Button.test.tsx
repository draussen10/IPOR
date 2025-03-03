import {render, screen} from '@testing-library/react';
import {Button, ButtonTheme} from './Button';

describe('Button', () => {
    test('be in document', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('has class clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
