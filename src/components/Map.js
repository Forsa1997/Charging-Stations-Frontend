import * as React from 'react';
import Box from '@mui/material/Box';
import ChargingMap from './ChargingMap';
import Collapse from "@mui/material/Collapse";
import { StyledEngineProvider } from "@mui/material/styles";
import BasicSlider from "./inputs/BasicSlider";
import BasicSelect from "./inputs/BasicSelect";
import ChipSelect from "./inputs/ChipSelect";
import referenceData from "../data/referenceData.json";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import { GET_NEW_DATA } from '../actions/types';
import stationData from "../data/stationData.json"
import SaveFilterDialog from './inputs/SaveFilterDialog';
import { useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";
import Paper from '@mui/material/Paper';
import MapMenuButton from "./inputs/MapMenuButton";
import BookmarkButton from "./inputs/BookmarkButton"
import { useSelector } from 'react-redux';


const Map = () => {

    const dispatch = useDispatch();

    if (useSelector(state => state.mapReducer.data.length===0)){ 
        dispatch({
            type: GET_NEW_DATA,
            payload: stationData,
        })
    }
 
    const [checked, setChecked] = React.useState(false);

    const plugTypes = [{ value: "type2", name: "Type 2" }, { value: "ccs", name: "CCS" }]
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
        <Paper elevation={6}
               sx={{
                   m: 0,
                   position: 'relative',
                   bgcolor: 'white',
                   p: 4,
                   border: '1px solid grey',
                   borderBottom: 0,
                   borderTop: 0,
                   borderLeft: 0,
                   width: {sm: '19vw', xs: 'calc(100vw - 65px)'},
                   minWidth: '286.480px',
                   zIndex: 2,
                   height: 'calc(100vh - 68.31px - 68.31px)',
                   maxHeight: 'calc(100vh - 68.31px - 68.31px)',
                   display: 'flex',
                   flexDirection: 'column'
               }}
        >
            <Box>
                <IconButton sx={{ float: 'right', mt: -3, mb: 2 }} onClick={handleOnMenuClick}>
                    <CloseIcon color='grey' fontSize='large' />
                </IconButton>
            </Box>
            <BasicSlider marks={marks} max={300} min={0} steps={5} default={0} />
            <BasicSelect filterType="FILTER_PLUGTYPE" values={plugTypes} header="Plug Type" />
            <ChipSelect values={chargingProviders} header="Operator" />
            <BasicSelect filterType="FILTER_FREETOUSE" values={chargingFree} header="Free to use" />
            <Box m="auto" sx={{ mt: 5 }}>
                <SaveFilterDialog />
            </Box>
        </Paper>

    )


    return (
        <StyledEngineProvider injectFirst>
            <Helmet>
                <title>EV-Map | Map</title>
            </Helmet>

            <Box sx={{ width: '100%', display: 'flex' }}>
                <Collapse orientation="horizontal" in={checked}>
                    {card}
                </Collapse>
                {!checked && <MapMenuButton handleOnMenuClick={handleOnMenuClick}/>}
                <ChargingMap checked={checked}/>
                <BookmarkButton />
            </Box>
        </StyledEngineProvider>


    )

}

export default Map