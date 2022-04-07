import * as React from 'react';
import Box from '@mui/material/Box';
import {filterPlug, filterFreeToUse} from '../../actions/filter';
import {useDispatch} from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from "@mui/material/Typography";


export default function FreeToUseSelect(props) {
    const [freeToUse, setFreeToUse] = React.useState('');
    const dispatch = useDispatch();

    const test = (event, newFreeToUse) => {
        setFreeToUse(newFreeToUse)
        dispatch(filterFreeToUse(newFreeToUse));
    };


    return (
        <Box sx={{maxWidth: 300, pt: 3}}>
            <Typography gutterBottom>{props.header}</Typography>

            <ToggleButtonGroup
                color="primary"
                exclusive
                value={freeToUse}
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
