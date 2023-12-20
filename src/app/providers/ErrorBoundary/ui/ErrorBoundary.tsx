import {ComponentProps} from 'shared/types/ComponentProps'
import React, {ErrorInfo, ReactNode} from 'react'
import {ErrorPanel} from 'widgets/ErrorPanel'

export interface ErrorBoundaryProps extends ComponentProps {
    children?: ReactNode
}
export interface ErrorBoundaryState{
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorPanel />
        }

        return this.props.children
    }
}

export default ErrorBoundary