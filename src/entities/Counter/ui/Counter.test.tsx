import {fireEvent, screen} from '@testing-library/react';
import {componentRender} from '@/shared/lib/tests/ComponentRender/ComponentRender';
import {Counter} from './Counter';

describe('Counter', () => {
    test('be in document', () => {
        componentRender(
            <Counter />,
            {
                initialState: {
                    counter: {
                        value: 10
                    }
                }
            }
        );
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('decrement', () => {
        componentRender(
            <Counter />,
            {
                initialState: {
                    counter: {
                        value: 10
                    }
                }
            }
        );

        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });

    test('increment', () => {
        componentRender(
            <Counter />,
            {
                initialState: {
                    counter: {
                        value: 10
                    }
                }
            }
        );

        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
});
