import React, { Fragment } from 'react';
import Slider from '@material-ui/core/Slider';
import RichTextfield from './RichTextfield';

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
        marks,
        maxLength,
        unitName,
        hintLabel,
        allowDecimals = false,
        ...rest
    } = props;

    const rangedValue = value < min ? min : value > max ? max : value;

    return (
        <Fragment>
            <RichTextfield
                allowDecimals={allowDecimals}
                maxLength={maxLength}
                label={label}
                id={id}
                value={value}
                unitName={unitName}
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
                marks={marks}
                {...sliderProps}
            />
        </Fragment>
    );
}
