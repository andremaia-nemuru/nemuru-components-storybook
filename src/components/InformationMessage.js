import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import { useTheme } from '@material-ui/styles';
import { IconWithCircle } from 'nemuru-components';

export default function InformationMessage({
    variant,
    isScreenXs,
    messageContent,
}) {
    const { palette, customBorderRadius } = useTheme();

    return (
        variant &&
        messageContent && (
            <Box
                container="true"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width={1}
            >
                <Box
                    style={{ top: isScreenXs ? 16 : 24, position: 'relative' }}
                >
                    <IconWithCircle
                        backgroundColor={palette[variant.type].main}
                        height={isScreenXs ? 26 : 40}
                        width={isScreenXs ? 26 : 40}
                        style={{
                            fontSize: isScreenXs ? 16 : 24,
                            color: palette[variant.type].contrastText,
                        }}
                    >
                        {variant.icon}
                    </IconWithCircle>
                </Box>
                <Box
                    container="true"
                    width={1}
                    bgcolor={palette[variant.type].light}
                    style={{
                        borderRadius: customBorderRadius.paper,
                        paddingTop: isScreenXs ? 14 : 26,
                        paddingBottom: 10,
                        width: '100%',
                    }}
                >
                    <Grid container justifyContent="center" spacing={0}>
                        <Grid item>
                            {isScreenXs ? null : (
                                <Typography
                                    variant="subtitle2"
                                    align="center"
                                    style={{
                                        color: palette.text.neutral,
                                        paddingInline: '16px',
                                        paddingTop: '4px',
                                    }}
                                >
                                    <strong>{messageContent.title}</strong>
                                </Typography>
                            )}
                            <Grid
                                item
                                style={{
                                    paddingInline: '16px',
                                    paddingBlock: '4px',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    align="center"
                                    style={{
                                        color: palette.text.neutral,
                                    }}
                                >
                                    {messageContent.body}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        )
    );
}
