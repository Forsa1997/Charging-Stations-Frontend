import * as React from 'react';
import Box from '@mui/material/Box';
import { filterFreeToUse } from '../../actions/filter';
import { useDispatch } from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from "@mui/material/Typography";


export default function FreeToUseSelect(props) {
    const dispatch = useDispatch();

    const test = (event, newFreeToUse) => {
        props.setInputState({ ...props.inputState, freeToUse: newFreeToUse })
        dispatch(filterFreeToUse(newFreeToUse));
    };


    return (
        <Box sx={{ maxWidth: 300, pt: 3 }}>
            <Typography gutterBottom>{props.header}</Typography>

            <ToggleButtonGroup
                color="primary"
                exclusive
                value={props.inputState.freeToUse}
                onChange={test}
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
