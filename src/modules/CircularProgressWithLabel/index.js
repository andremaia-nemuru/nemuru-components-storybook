import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
             {/*<CircularProgress variant="static" value={70} style={{position: 'absolute', color: '#f80'}}/>*/}
             <div className={'wrap-circle'} style={{
                 "borderRadius": "30px",
                 "boxShadow":"0 0 10px #0004",
                 "height":"30px",
                 "position":"absolute",
                 "width":"30px",
                 "top":"5px",
                 "left":"5px"
             }}/>
                 <CircularProgress variant="static" {...props} />
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
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and static variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};
