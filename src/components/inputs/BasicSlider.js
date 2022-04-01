import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { filterPower } from '../../actions/filter';
import { useDispatch } from "react-redux";


function valuetext(value) {
    return `${value}KW`;
}


export default function DiscreteSliderLabel(props) {
    let dispatch = useDispatch();
    const [value, setValue] = React.useState(props.default);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };
    

    return (
        <Box sx={{ width: 300, pt: 3 }} >
            <Typography gutterBottom>Charging Power</Typography>
            <Slider
                aria-label="Always visible"
                defaultValue={props.default}
                getAriaValueText={valuetext}
                step={props.steps}
                marks={props.marks}
                valueLabelDisplay="off"
                track="inverted"
                min={props.min}
                max={props.max}
                onChange={handleSliderChange}
                onMouseUp={() => dispatch(filterPower(value))}              
            />
        </Box>
    );
}