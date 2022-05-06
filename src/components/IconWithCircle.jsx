import React from 'react';
import { Box } from '@material-ui/core';

export default function IconWithCircle({
    children,
    backgroundColor,
    height = 16,
    width = 16,
    border = 'none',
    ...props
}) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="100px"
            height={height}
            width={width}
            bgcolor={backgroundColor}
            border={border}
        >
            <i {...props}>{children}</i>
        </Box>
    );
}
