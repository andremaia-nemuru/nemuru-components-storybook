import React, { useState } from 'react';

import { Box, Paper, Switch } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useTheme } from '@material-ui/styles';

export default function TripleStateToggler({
    name,
    value,
    handleChange,
    disabled,
}) {
    const { palette } = useTheme();
    const [state, setState] = useState(value);
    const [switchState, setSwitchState] = useState(value);

    const handleSwitchChange = (e) => {
        setSwitchState(e.target.checked);
        handleChange(name, e.target.checked);
    };

    const handleToggleChange = (e, value) => {
        setState(value);
        setSwitchState(value);
        handleChange(name, value);
    };

    const StyledToggleButtonGroup = withStyles(() => ({
        root: {
            width: 40,
            backgroundColor: palette.common.white,
            color: palette.text.primary,
            borderRadius: 10,
        },
        grouped: {
            height: 20,
            width: 20,
            border: 'none',
            padding: 16,
            borderRadius: 16,
            margin: '-6px',
            '&:not(:first-child)': { marginLeft: 0 },
            '&:hover': {
                borderRadius: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            '&.Mui-selected': {
                borderRadius: 10,
            },
        },
    }))(ToggleButtonGroup);

    const useStyles = makeStyles(() => ({
        paper: {
            display: 'flex',
            flexWrap: 'wrap',
            borderRadius: '10px !important',
        },
        divider: {},
    }));

    const classes = useStyles();
    const defaultSwitchStyle = {
        position: 'absolute',
        zIndex: '1',
        transition: '0.3s all',
    };

    const untoggledValue = null || undefined;

    return (
        <>
            <Paper elevation={0} className={classes.paper}>
                <Box
                    style={
                        state === untoggledValue
                            ? {
                                  ...defaultSwitchStyle,
                                  pointerEvents: 'none',
                                  opacity: '0',
                              }
                            : { ...defaultSwitchStyle, opacity: '1' }
                    }
                >
                    <Switch
                        className={'Mui-checked'}
                        checked={state === untoggledValue ? false : switchState}
                        onChange={(e) => handleSwitchChange(e)}
                        disabled={disabled}
                        style={{
                            opacity: disabled ? 0.5 : 1,
                        }}
                        icon={
                            <i
                                className="material-icons-outlined"
                                style={{
                                    fontSize: 16,
                                    backgroundColor: palette.grey[400],
                                    color: palette.common.white,
                                    // color: palette.text.primary,
                                    borderRadius: 10,
                                    height: 20,
                                    width: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                close
                            </i>
                        }
                        checkedIcon={
                            <i
                                className="material-icons-outlined"
                                style={{
                                    fontSize: 16,
                                    backgroundColor: palette.success.main,
                                    color: palette.success.contrastText,
                                    borderRadius: 10,
                                    height: 20,
                                    width: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                done
                            </i>
                        }
                    />
                </Box>
                <>
                    <Paper
                        elevation={state === untoggledValue ? 2 : 0}
                        style={{ marginRight: 18, borderRadius: 10 }}
                    >
                        <StyledToggleButtonGroup
                            onChange={handleToggleChange}
                            size="small"
                            exclusive
                        >
                            <ToggleButton
                                value={false}
                                style={{
                                    padding: 16,
                                    borderRadius: 16,
                                    margin: -6,
                                }}
                                // disabled={disabled}
                            >
                                <i
                                    className="material-icons-outlined"
                                    style={{ fontSize: 16 }}
                                >
                                    close
                                </i>
                            </ToggleButton>
                            <ToggleButton
                                value={true}
                                style={{
                                    padding: 16,
                                    borderRadius: 16,
                                    margin: '-6px -7px',
                                }}

                                // disabled={disabled}
                            >
                                <i
                                    className="material-icons-outlined"
                                    style={{ fontSize: 16 }}
                                >
                                    done
                                </i>
                            </ToggleButton>
                        </StyledToggleButtonGroup>
                    </Paper>
                </>
            </Paper>
        </>
    );
}
