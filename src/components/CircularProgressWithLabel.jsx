import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function CircularProgressWithLabel(props) {
    const {
        value,
        subCircleValue,
        subCircleClassName,
        size,
        options,
        label,
        subCircleStyle = {},
    } = props;
    const wrapCircleSizePx = `${size - 6}px`;

    return (
        <Box position="relative" display="inline-flex">
            {!!subCircleValue && (
                <CircularProgress
                    variant="static"
                    value={subCircleValue}
                    size={size}
                    thickness={1.5}
                    {...options}
                    className={subCircleClassName || ''}
                    style={{ position: 'absolute', ...subCircleStyle }}
                />
            )}
            <CircularProgress
                variant="static"
                value={value}
                size={size}
                thickness={1.5}
                {...options}
            />
            <div
                className={'wrap-circle'}
                style={{
                    borderRadius: '30px',
                    boxShadow: '0 0 10px #0006',
                    height: wrapCircleSizePx,
                    position: 'absolute',
                    width: wrapCircleSizePx,
                    top: '3px',
                    left: '3px',
                }}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{ lineHeight: '0px' }}
            >
                {label || value}
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    options: PropTypes.object,
    subCircleClassName: PropTypes.string,
    subCircleValue: PropTypes.number,
    value: PropTypes.number.isRequired,
};
