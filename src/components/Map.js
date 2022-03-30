
import * as React from 'react';
import Box from '@mui/material/Box';
import BasicSelect from "./inputs/BasicSelect"
import BasicSlider from "./inputs/BasicSlider"
import BasicTextField from "./inputs/BasisTextfield"
import ChargingMap from './ChargingMap';
import ChipSelect from './inputs/ChipSelect'

const Map = () => {

    const plugTypes = [{ value: 0, name: "Type 2" }, { value: 1, name: "CCS" }]
    const chargingProviders = [{ value: 0, name: "Ionity" }, { value: 1, name: "EnBw" }, { value: 2, name: "Shell" }]
    const chargingFree = [{ value: 0, name: "No" }, { value: 1, name: "Yes" }]

    return (
        <Box
            style={{ height: 'calc(100vh - 70px)' }}
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <Box justify="flex-end" sx={{
                width: '30%',
                bgcolor: 'grey.400',
                p: 7,
                border: '1px solid grey',
                
            }}
            >
                <BasicTextField />
                <BasicSlider />
                <BasicSelect values={plugTypes} header="Plug Type" />
                <ChipSelect values={chargingProviders} header="Provider"/>
                <BasicSelect values={chargingFree} header="Free to use" />

            </Box>
            <Box sx={{ width: '70%'}}>
                <ChargingMap/>
            </Box>
        </Box>
    )

}

export default Map