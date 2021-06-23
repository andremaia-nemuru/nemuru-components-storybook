import React from 'react'
import {Box} from "@material-ui/core";

export default function ThemedAsset(
    {
        id,
        width,
        height,
        style,
        ...props
    }) {
    return (
        <Box {...props} style={style}>
            <svg width={width} height={height}>
                <use xlinkHref={`#${id}`}/>
            </svg>
        </Box>
    )
}



