import React, { Fragment } from 'react';
import { useTheme } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const replaceCommasForDots = (value) => value.replace(/,/g, '.');

const removeDuplicateDot = (value) =>
    value.split('.').length - 1 > 1 ? value.slice(0, -1) : value;

const controlMaxLength = (value, maxLength) =>
    value.split('.')[0].length === maxLength + 1 ? value.slice(0, -1) : value;

const parseAsFloatIfHasDecimals = (value) =>
    value.length - value.indexOf('.') > 2
        ? parseFloat(value).toFixed(2)
        : value;

export default function RichTextfield({
    isMobile,
    fontStyles = {},
    value,
    unitName,
    allowDecimals = false,
    maxLength,
    action,
    InputProps,
    rest,
    ...props
}) {
    const { palette: themePalette } = useTheme();

    const handleChange = (value) => {
        if (value.indexOf('.') !== -1) {
            if (allowDecimals) {
                if (value.split('.')[1]) {
                    return parseFloat(value);
                } else {
                    return value;
                }
            } else {
                return parseInt(value) || 0;
            }
        } else {
            return parseInt(value) || 0;
        }
    };

    const handleOnInput = (e) => {
        let value = e.target.value;
        if (allowDecimals) {
            value = replaceCommasForDots(value);
            value = removeDuplicateDot(value);
            value = controlMaxLength(value, maxLength);
            value = parseAsFloatIfHasDecimals(value);
        } else {
            value = controlMaxLength(value, maxLength);
        }
        e.target.value = value;
    };

    return (
        <Fragment>
            <div className="input-unit-helper">
                <div
                    className={isMobile ? 'wrapper-mobile' : 'wrapper'}
                    style={fontStyles}
                >
                    <span>{value}</span>
                    {unitName}
                </div>
            </div>
            <TextField
                {...props}
                value={value}
                onChange={(e) => {
                    action(e.target.name, handleChange(e.target.value));
                }}
                onInput={(e) => handleOnInput(e)}
                InputProps={{
                    endAdornment: (
                        <i
                            className="icon-edit-input"
                            style={{
                                pointerEvents: 'none',
                                opacity: 0.5,
                                verticalAlign: 'text-top',
                                fontSize: '25px',
                                color: themePalette.static.grey65,
                            }}
                        ></i>
                    ),
                    ...InputProps,
                }}
                {...rest}
            />
        </Fragment>
    );
}
