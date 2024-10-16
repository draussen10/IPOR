import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from './Sidebar';
import {componentRender} from 'shared/lib/tests/ComponentRender/ComponentRender';

describe('Sidebar', () => {
    test('be in document', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle width', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
