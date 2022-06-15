import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { select } from '@storybook/addon-knobs';
import { customThemes, THEME_NAMES } from './themes';
import createCustomTheme from '../../kernel/utils/createCustomTheme';

const themes = customThemes;
const themeNames = Object.keys(THEME_NAMES);
export default ({ children }) => {
    const theme = select('Theme', themeNames, themeNames[0], 'Themes');
    return (
        <ThemeProvider theme={createCustomTheme(themes[theme])}>
            {children}
        </ThemeProvider>
    );
};
