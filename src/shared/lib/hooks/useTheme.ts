import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {LOCAL_STORAGE_THEME_KEY, Theme} from '../../const/theme';

interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    };
}
