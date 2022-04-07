import React from 'react'

import createCustomTheme from "../utils/createCustomTheme";
import {ThemeProvider} from '@material-ui/styles';
import AssetPackDefiner from "./AssetPackDefiner";


function ThemerPack(props) {
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

export default React.memo(ThemerPack);




