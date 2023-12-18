import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/Router";

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
            <AppRouter/>
        </div>
    );
};

export default App;