import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';

export const InputRangeTextField = ({
    allowDecimals = false,
    maxLength,
    action,
    InputProps,
    rest,
    ...props
}) => {
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

    return (
        <TextField
            {...props}
            onChange={(e) => {
                action(e.target.name, handleChange(e.target.value));
            }}
            onInput={(e) => {
                if (allowDecimals) {
                    e.target.value = e.target.value.replace(/,/g, '.');
                    if (e.target.value.split('.').length - 1 > 1) {
                        e.target.value = e.target.value.slice(0, -1);
                    }
                    if (e.target.value.split('.')[0].length === maxLength + 1) {
                        e.target.value = e.target.value.slice(0, -1);
                    }
                    if (e.target.value.indexOf('.') === -1) {
                        return;
                    }
                    if (
                        e.target.value.length - e.target.value.indexOf('.') >
                        2
                    ) {
                        e.target.value = parseFloat(e.target.value).toFixed(2);
                    }
                } else {
                    if (e.target.value.split('.')[0].length === maxLength + 1) {
                        e.target.value = e.target.value.slice(0, -1);
                    }
                }
            }}
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
    );
};

export default function InputRange(props) {
    const {
        value,
        id,
        label,
        name,
        action,
        input,
        sliderProps,
        min,
        max,
        step,
        maxLength,
        unitName,
        hintLabel,
        allowDecimals = false,
        ...rest
    } = props;

    const rangedValue = value < min ? min : value > max ? max : value;

    return (
        <Fragment>
            <div className="input-unit-helper">
                <div className="wrapper">
                    <span>{value}</span>
                    {unitName}
                </div>
            </div>
            <InputRangeTextField
                allowDecimals={allowDecimals}
                maxLength={maxLength}
                label={label}
                id={id}
                value={value}
                name={name}
                error={value !== rangedValue}
                action={action}
                rest={rest}
            />
            {hintLabel && (
                <small className={'float-right mt-1'}>{hintLabel}</small>
            )}
            <Slider
                id={id}
                name={name}
                title={name}
                value={rangedValue}
                onChange={(e, newValue) => {
                    action(name, newValue);
                }}
                min={min}
                max={max}
                step={step}
            />
        </Fragment>
    );
}
