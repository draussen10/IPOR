import React, {Suspense, useContext, useEffect, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import MainPageAsync from "./pages/MainPage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {toggleTheme, theme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggleTheme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;