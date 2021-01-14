import React, {Component, useEffect} from 'react'
import PropTypes from 'prop-types'

import useTheme from "@material-ui/core/styles/useTheme";

import {createCustomTheme, createDefaultTheme, nemuruMuiTheme} from "../config/material";
import { ThemeProvider } from '@material-ui/styles';



export default function Themer(props) {
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



