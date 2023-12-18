import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
    const {toggleTheme, theme} = useTheme()

    return (
        <div
            className={classNames(
                `app`,
                {},
                [theme])
            }
        >
            <button onClick={toggleTheme}>toggleTheme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;