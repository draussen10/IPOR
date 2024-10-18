import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import {Suspense, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {userActions} from 'entities/User';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
