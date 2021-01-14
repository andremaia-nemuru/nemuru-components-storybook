import React, { Fragment } from 'react';
import Slider from '@material-ui/core/Slider';
import RichTextfield from './RichTextfield';

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
        allowDecimals = false,
        hideDetails = false,
        color = 'inherit',
        ...rest
    } = props;
    const rangedValue = value < min ? min : value > max ? max : value;
    const fontStyles = {
        color,
        fontWeight: 'bold',
        fontSize: '24px',
    };

    return (
        <Fragment>
            <RichTextfield
                isMobile
                fontStyles={fontStyles}
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
                InputProps={{
                    style: {
                        ...fontStyles,
                    },
                }}
            />
            <div
                className={`px-2 ${
                    hideDetails ? 'hide-extend-anim' : 'show-extend-anim'
                }`}
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
