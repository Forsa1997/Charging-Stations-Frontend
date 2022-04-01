import * as React from 'react';
import Box from '@mui/material/Box';
import ChargingMap from './ChargingMap';
<<<<<<< HEAD
import PrimarySearchAppBar from "./inputs/PrimarySearchAppBar";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import {StyledEngineProvider} from "@mui/material/styles";
import BasicTextField from "./inputs/BasisTextfield";
import BasicSlider from "./inputs/BasicSlider";
import BasicSelect from "./inputs/BasicSelect";
import ChipSelect from "./inputs/ChipSelect";
import referenceData from "../data/referenceData.json";
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";


const Map = () => {
    const [checked, setChecked] = React.useState(false);

    const plugTypes = [{ value: "type2", name: "Type 2" }, { value: "ccs", name: "CCS" }, { value: "all", name: "All" }]
    const chargingProviders = referenceData.Operators
    const chargingFree = [{ value: "no", name: "No" }, { value: "yes", name: "Yes" }]
    const marks = [
        {
            value: 0,
            label: '0KW',
        },
        {
            value: 50,
            label: '50KW',
        },
        {
            value: 150,
            label: '150KW',
        },
        {
            value: 300,
            label: '300KW',
        },
    ];


    const handleOnMenuClick = () => {
        setChecked(prev => !prev);
    }

    const card = (
        <Card sx={{
            m: 0,
            position: 'relative',
            bgcolor: 'white',
            p: 4,
            border: '1px solid grey',
            borderBottom: 0,
            borderTop: 0,
            borderLeft: 0,
            width: '19vw',
            zIndex: 2,
            height: 'calc(100vh - 68px)',
            display: 'flex',
            flexDirection: 'column'
        }}
        >
            <Box>
            <IconButton sx={{float: 'right'}} onClick={handleOnMenuClick}>
                <CloseIcon color='grey' fontSize='large'/>
            </IconButton>
            </Box>
            <BasicTextField />
            <BasicSlider marks={marks} max={300} min={0} steps={5} default={50} />
            <BasicSelect filterType="FILTER_PLUGTYPE" values={plugTypes} header="Plug Type" />
            <ChipSelect  values={chargingProviders} header="Operator" />
            <BasicSelect filterType="FILTER_FREETOUSE" values={chargingFree} header="Free to use" />
        </Card>

)


=======
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
>>>>>>> mapTestScale

    return (
        <StyledEngineProvider injectFirst>

            <Box sx={{width: '100vw', height: 'calc(100vh - 68px)', display: 'flex'}}>
                <Collapse orientation="horizontal" in={checked}>
                    {card}
                </Collapse>
                <PrimarySearchAppBar handleOnMenuClick={handleOnMenuClick}/>
                <ChargingMap/>
            </Box>
        </StyledEngineProvider>


    )

}

export default Map