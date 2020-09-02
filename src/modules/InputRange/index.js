import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';


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
        unitName,
        hintLabel,
        ...rest
    } = props

    const rangedValue = value < min ? min : (value > max ? max : value)
    const numStringValue = Number(value).toString(); // fix to avoid leading zeros on input

    return (
        <Fragment>
            <div className='input-unit-helper'>
                <div className='wrapper'>
                    <span>{value}</span>{unitName}
                </div>
            </div>
            <TextField
                label={label}
                type={'number'}
                id={id}
                value={numStringValue}
                name={name}
                onChange={(e) => {  action(e.target.name, Number(e.target.value))}}
                InputProps={{
                    endAdornment: <i className="icon-edit-input" style={{ pointerEvents: 'none', opacity: 0.5, verticalAlign: 'text-top', fontSize: '25px' }}>
                    </i>
                }}
                error={value!==rangedValue}
                {...rest}
            />
            {hintLabel && (<small className={'float-right mt-1'}>{hintLabel}</small>)}
            <Slider
                id={id}
                name={name}
                title={name}
                value={rangedValue}
                onChange={(e, newValue) => { action(name, newValue)}}
                min={min}
                max={max}
                step={step}
            />
        </Fragment>
    )
}
