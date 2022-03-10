import React from 'react';
import { Box } from '@material-ui/core';
import { FilledDefs } from '../assets/assetPacksDefs/FilledDefs';
import { OutlinedDefs } from '../assets/assetPacksDefs/OutlinedDefs';
import { assetPackIds } from '../assets/assetPacksDefs/config';

export default function AssetPackDefiner(props) {
    const { children, id } = props;
    // const pack = assetPackDefsId ? import( '../assets/assetPacksDefs/OutlinedDefs') : import( '../assets/assetPacksDefs/FilledDefs')
    return (
        <>
            <Box height={'0px'}>
                {id === assetPackIds.FILLED && <FilledDefs />}
                {id === assetPackIds.OUTLINED && <OutlinedDefs />}
            </Box>
            {children}
        </>
    );
}
