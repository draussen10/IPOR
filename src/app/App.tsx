import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";

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
            <Navbar />
            <button onClick={toggleTheme}>toggleTheme</button>
            <AppRouter/>
        </div>
    );
};

export default App;