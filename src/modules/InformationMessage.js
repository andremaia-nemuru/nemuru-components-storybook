import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import { useTheme } from '@material-ui/styles';
import { IconWithCircle } from 'nemuru-components';

export default function InformationMessage({
    variant,
    isScreenXs,
    messageContent,
}) {
    const { palette: themePalette } = useTheme();

    return (
        variant && (
            <Box
                container
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                fullWidth
            >
                <Box
                    style={{ top: isScreenXs ? 16 : 24, position: 'relative' }}
                >
                    <IconWithCircle
                        backgroundColor={themePalette[variant.type].main}
                        height={isScreenXs ? 26 : 44}
                        width={isScreenXs ? 26 : 44}
                        className="material-icons"
                        style={{
                            fontSize: isScreenXs ? 16 : 24,
                            color: themePalette.secondary.contrastText,
                        }}
                    >
                        {variant.icon}
                    </IconWithCircle>
                </Box>
                <Box
                    container
                    fullWidth
                    bgcolor={themePalette[variant.type].light}
                    style={{
                        borderRadius: 8,
                        paddingTop: isScreenXs ? 10 : 24,
                    }}
                >
                    <Grid
                        container
                        spacing={8}
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <Grid item>
                            {isScreenXs ? null : (
                                <Typography
                                    variant="subtitle2"
                                    style={{
                                        color: themePalette.secondary.main,
                                        paddingInline: '20px',
                                        paddingTop: '5px',
                                    }}
                                >
                                    <strong>{messageContent?.title}</strong>
                                </Typography>
                            )}

                            <Grid
                                item
                                style={{
                                    paddingInline: '20px',
                                    paddingBlock: '13px',
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    style={{
                                        color: themePalette.secondary.main,
                                    }}
                                >
                                    {messageContent?.body}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        )
    );
}
