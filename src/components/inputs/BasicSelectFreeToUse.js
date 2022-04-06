import * as React from 'react';
import Box from '@mui/material/Box';
import {filterPlug, filterFreeToUse} from '../../actions/filter';
import {useDispatch} from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from "@mui/material/Typography";


export default function BasicSelectFreeToUse(props) {
    const [plugType, setPlugType] = React.useState('');
    const dispatch = useDispatch();

    const handleChange = (event, newPlugType) => {
        setPlugType(newPlugType);
        switch (props.filterType) {
            case "FILTER_FREETOUSE":
                dispatch(filterFreeToUse(newPlugType));
                break;
            default:
                ;
        }
    };


    return (
        <Box sx={{maxWidth: 300, pt: 3}}>
            <Typography gutterBottom>{props.header}</Typography>

            <ToggleButtonGroup
                color="primary"
                exclusive
                value={plugType}
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
