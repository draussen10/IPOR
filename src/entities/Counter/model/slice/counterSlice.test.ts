import {counterActions, counterReducer} from './counterSlice';
import {type CounterSchema} from 'entities/Counter';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10
        };

        expect(
            counterReducer(state, counterActions.decrement))
            .toEqual({value: 9});
    });

    test('decrement', () => {
        const state: CounterSchema = {
            value: 10
        };

        expect(
            counterReducer(state, counterActions.increment))
            .toEqual({value: 11});
    });

    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment))
            .toEqual({value: 1});
    });
});
