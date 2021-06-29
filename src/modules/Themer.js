import React from 'react'

import {createCustomTheme} from "../config/material";
import {ThemeProvider} from '@material-ui/styles';
import AssetPackDefiner from "./AssetPackDefiner";


export function Themer(props) {
    const {
        children,
        theme,
    } = props

    return (
        <ThemeProvider theme={createCustomTheme(theme)}>
            <AssetPackDefiner id={theme && theme.assetPackDefsId}>
                {children}
            </AssetPackDefiner>
        </ThemeProvider>
    )
}

export default React.memo(Themer);




