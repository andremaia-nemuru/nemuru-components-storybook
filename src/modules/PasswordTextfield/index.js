import React from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton, Box, useTheme } from '@material-ui/core';

PasswordTextfield.propTypes = {
    showPassword: PropTypes.bool,
    handleClickShowPassword: PropTypes.func.isRequired,
    iconColor: PropTypes.string,
    showPasswordStrengthMeter: PropTypes.bool,
    passwordStrengthLevel: PropTypes.number,
    onChange: PropTypes.func,
};

export default function PasswordTextfield({
    showPassword,
    handleClickShowPassword = () => {},
    iconColor = 'inherit',
    showPasswordStrengthMeter = false,
    passwordStrengthLevel = 0,
    onChange = () => {},
    children,
    ...props
}) {
    const themePalette = useTheme().palette;

    const STRENGTH_LEVELS = {
        0: {
            color: themePalette.static.grey20,
        },
        1: {
            color: themePalette.error.main,
        },
        2: {
            color: themePalette.warning.main,
        },
        3: {
            color: themePalette.primary.main,
        },
        4: {
            color: themePalette.primary.main,
        },
    };

    const PasswordStrengthMeterBar = ({ barLevel, ...props }) => {
        const backgroundColor =
            passwordStrengthLevel > barLevel
                ? STRENGTH_LEVELS[passwordStrengthLevel].color
                : STRENGTH_LEVELS[0].color;
        return (
            <Box
                {...props}
                width="25%"
                height="7px"
                borderRadius="3px"
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <Box>
            <TextField
                style={{ ...props.style, marginBottom: '0' }}
                {...props}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            <i
                                className="material-icons"
                                style={{
                                    verticalAlign: 'text-top',
                                    fontSize: '24px',
                                    color: iconColor,
                                }}
                            >
                                {showPassword ? 'visibility_off' : 'visibility'}
                            </i>
                        </IconButton>
                    ),
                }}
                onChange={onChange}
            />
            {/* Password strength meter */}
            {showPasswordStrengthMeter && (
                <Box
                    className="p-1 ml-1"
                    width="100%"
                    borderRadius="3px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <PasswordStrengthMeterBar className="mr-1" barLevel={0} />
                    <PasswordStrengthMeterBar className="mr-1" barLevel={1} />
                    <PasswordStrengthMeterBar className="mr-1" barLevel={2} />
                    <PasswordStrengthMeterBar barLevel={3} />
                </Box>
            )}
        </Box>
    );
}
