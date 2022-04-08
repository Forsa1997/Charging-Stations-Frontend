import * as React from 'react';
import Box from '@mui/material/Box';
import { filterPlug } from '../../actions/filter';
import { useDispatch } from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from "@mui/material/Typography";


export default function BasicSelect(props) {

    const dispatch = useDispatch();

    const handleChange = (event, newPlugType) => {
        props.setInputState({ ...props.inputState, plugType: newPlugType });
        dispatch(filterPlug(newPlugType));

    };
    return (
        <Box sx={{ maxWidth: 300, pt: 3 }}>
            <Typography gutterBottom>{props.header}</Typography>

            <ToggleButtonGroup
                color="primary"
                value={props.inputState.plugType}
                onChange={handleChange}
            >
                {props.values.map((input, index) => {
                    return (
                        <ToggleButton key={index} value={input.value}>{input.name}</ToggleButton>
                    )
                })}
            </ToggleButtonGroup>
        </Box>
    );
}
