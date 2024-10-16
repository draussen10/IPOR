import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import {Suspense} from 'react';

export const App = () => {
    return (
        <div className={'app'}>
            {/* Suspense нужен для i18n */}
            <Suspense fallback=''>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};
