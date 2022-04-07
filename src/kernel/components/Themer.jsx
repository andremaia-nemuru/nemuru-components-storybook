import React from 'react'

import createCustomTheme from "../utils/createCustomTheme";
import {ThemeProvider} from '@material-ui/styles';


function Themer(props) {
    const {
        children,
        theme,
    } = props


    return (
        <ThemeProvider theme={createCustomTheme(theme)}>
            {children}
        </ThemeProvider>
    )
}

export default React.memo(Themer);




