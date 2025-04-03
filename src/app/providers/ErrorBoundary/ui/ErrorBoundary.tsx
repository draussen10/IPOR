import {Component, type ErrorInfo, type ReactNode, Suspense} from 'react';
import {PageError} from '@/widgets/PageError';

interface IProps {
    children: ReactNode
}

interface IState {
    hasError: boolean
}

export class ErrorBoundary extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError () {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch (error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render () {
        if (this.state.hasError) {
            return (
                <Suspense fallback=''>
                    <PageError />
                </Suspense>
            );
        }

        return this.props.children;
    }
}
