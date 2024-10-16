/* eslint-disable i18next/no-literal-string */

import {useEffect, useState} from 'react';

// Для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button
            onClick={throwError}
        >
            throw error
        </button>
    );
};
