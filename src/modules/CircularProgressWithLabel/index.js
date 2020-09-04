import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function CircularProgressWithLabel(props) {
    const {value, subCircleValue, subCircleClassName, options} = props;
    return (
        <Box position="relative" display="inline-flex">

            <div className={'wrap-circle'} style={{
                "borderRadius": "30px",
                "boxShadow": "0 0 10px #0004",
                "height": "30px",
                "position": "absolute",
                "width": "30px",
                "top": "5px",
                "left": "5px"
            }}/>
            {subCircleValue && (
                <CircularProgress variant="static" value={subCircleValue} {...options}
                                  className={subCircleClassName || ''} style={{position: 'absolute', opacity: 0.6}}/>
            )}
            <CircularProgress variant="static" value={value} {...options} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                    value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    options: PropTypes.object,
    subCircleClassName: PropTypes.string,
    subCircleValue: PropTypes.number,
    value: PropTypes.number.isRequired
}
