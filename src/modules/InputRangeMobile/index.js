import React, { Fragment } from 'react';
import { useTheme } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';

export default function InputRangeMobile(props) {
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
        hideDetails = false,
        color,
        ...rest
    } = props;
    const { palette: themePalette } = useTheme();
    const rangedValue = value < min ? min : value > max ? max : value;
    const numStringValue = Number(value).toString(); // fix to avoid leading zeros on input
    const fontStyles = {
        color,
        fontWeight: 'bold',
        fontSize: '24px',
    };

    return (
        <Fragment>
            <div className="input-unit-helper">
                <div className="wrapper" style={{ ...fontStyles }}>
                    <span>{value}</span>
                    <span>{unitName}</span>
                </div>
            </div>
            <TextField
                label={label}
                type={'number'}
                id={id}
                value={numStringValue}
                name={name}
                onChange={(e) => {
                    action(e.target.name, Number(e.target.value));
                }}
                onInput={(e) => {
                    if (!maxLength) return;
                    e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, maxLength);
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
                    style: {
                        ...fontStyles,
                    },
                }}
                error={value !== rangedValue}
                {...rest}
            />
            <div
                className={
                    hideDetails ? 'hide-extend-anim' : 'show-extend-anim'
                }
                style={{
                    transitionDuration: '0.2s',
                    pointerEvents: hideDetails ? 'none' : 'inherit',
                }}
            >
                {hintLabel && (
                    <small
                        className={`float-right mt-1 `}
                        style={{ transitionDuration: '0.2s' }}
                    >
                        {hintLabel}
                    </small>
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
            </div>
        </Fragment>
    );
}
