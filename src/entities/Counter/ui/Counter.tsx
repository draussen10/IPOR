import {Button} from '@/shared/ui/Button';
import { useCounterActions} from '../model/slice/counterSlice';
import {useCounterValue} from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const counterValue = useCounterValue();
    const {add, decrement, increment} = useCounterActions();

    const incrementHandler = () => {
        increment();
    };

    const incrementFiveHandler = () => {
        add(5);
    };

    const decrementHandler = () => {
        decrement();
    };

    return (
        <div>
            {/* eslint-disable i18next/no-literal-string */}
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={incrementHandler}>
                increment
            </Button>
            <Button data-testid="increment-five-btn" onClick={incrementFiveHandler}>
                incrementFive
            </Button>
            <Button data-testid="decrement-btn" onClick={decrementHandler}>
                decrement
            </Button>
        </div>
    );
};
