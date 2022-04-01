
import * as React from 'react';
import Box from '@mui/material/Box';
import ChargingMap from './ChargingMap';
import BasicPopover from './inputs/BasicPopover';
import { GET_NEW_DATA } from '../actions/types';
import stationData from "../data/stationData.json"
import { useDispatch } from 'react-redux';



const Map = () => {
    const dispatch = useDispatch();
    dispatch({
        type: GET_NEW_DATA,
        payload: stationData,
    })

    return (
        
            <Box sx={{ width: '100vw', height: 'calc(100vh - 68px)' }}>
                <BasicPopover />
                <ChargingMap />
            </Box>
    
    )

}

export default Map