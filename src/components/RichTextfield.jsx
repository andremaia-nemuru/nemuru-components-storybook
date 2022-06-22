import React, { Fragment } from 'react';
import { useTheme } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

const NumberFormatCustom = ({
    maxLength,
    allowDecimals,
    unitName,
    inputRef,
    onChange,
    ...props
}) => (
    <NumberFormat
        {...props}
        getInputRef={inputRef}
        onValueChange={(values) => {
            onChange({
                target: {
                    name: props.name,
                    value: values.value,
                },
            });
        }}
        decimalSeparator={','}
        thousandSeparator={'.'}
        suffix={unitName ? ` ${unitName}` : ''}
        decimalScale={allowDecimals ? 2 : 0}
        fixedDecimalScale
        isNumericString
        isAllowed={({ value }) => {
            console.log('isAllowed', value, maxLength);
            return maxLength ? value.split('.')[0].length <= maxLength : true;
        }}
    />
);

export default function RichTextfield({
    isMobile,
    hideIcon = false,
    fontStyles = {},
    value,
    unitName,
    allowDecimals = false,
    maxLength,
    action = () => {},
    InputProps = {},
    inputProps = {},
    rest = {},
    ...props
}) {
    const { palette: themePalette } = useTheme();
    return (
        <Fragment>
            <TextField
                {...props}
                value={value}
                onChange={(e) => {
                    action(e.target.name, Number(e.target.value));
                }}
                InputProps={{
                    inputComponent: NumberFormatCustom,
                    inputProps: {
                        allowDecimals,
                        maxLength,
                        unitName,
                        ...inputProps,
                    },
                    endAdornment: !hideIcon ? (
                        <i
                            className="icon-edit-input"
                            style={{
                                pointerEvents: 'none',
                                opacity: 0.5,
                                verticalAlign: 'text-top',
                                fontSize: '25px',
                                color: themePalette.grey[700],
                            }}
                        ></i>
                    ) : null,
                    ...InputProps,
                }}
                {...rest}
            />
        </Fragment>
    );
}
