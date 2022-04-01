
import * as React from 'react';
import Box from '@mui/material/Box';
import ChargingMap from './ChargingMap';
import BasicPopover from './inputs/BasicPopover';


const Map = () => {

    return (
        
            <Box sx={{ width: '100vw', height: 'calc(100vh - 68px)' }}>
                <BasicPopover />
                <ChargingMap />
            </Box>
    
    )

}

export default Map