import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { filterPower } from '../../actions/filter';
import { useDispatch } from "react-redux";


function valuetext(value) {
    return `${value}KW`;
}


export default function BasicSlider(props) {
    let dispatch = useDispatch();

    const handleSliderChange = (event, newValue) => {
        props.setInputState({ ...props.inputState, slider: newValue })
    };


    return (
        <Box sx={{ width: '100%', pt: 3 }} >
            <Typography gutterBottom>Charging Power</Typography>
            <Slider
                value={props.inputState.slider}
                aria-label="Always visible"
                getAriaValueText={valuetext}
                step={props.steps}
                marks={props.marks}
                valueLabelDisplay="off"
                track="inverted"
                min={props.min}
                max={props.max}
                onChange={handleSliderChange}
                onMouseUp={() => dispatch(filterPower(props.inputState))}
            />
        </Box>
    );
}