import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {filterPlug, filterFreeToUse} from '../../actions/filter';
import {useDispatch} from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from "@mui/material/Typography";


export default function BasicSelect(props) {
    const [plugType, setPlugType] = React.useState('');
    const dispatch = useDispatch();

    const handleChange = (event, newPlugType) => {
        setPlugType(newPlugType);
        switch (props.filterType) {
            case "FILTER_PLUGTYPE":
                dispatch(filterPlug(newPlugType));
                break;
            case "FILTER_FREETOUSE":
                console.log(newPlugType)
                dispatch(filterFreeToUse(newPlugType));
                break;
            default:
                ;
        }
    };


    return (
        <Box sx={{maxWidth: 300, pt: 3}}>
            {/*<FormControl fullWidth>*/}
            {/*  <InputLabel htmlFor="plugtype-select">{props.header}</InputLabel>*/}
            {/*  <Select*/}
            {/*      labelId="plugtype-select-label"*/}
            {/*      id="plugtype-select"*/}
            {/*      value={plugType}*/}
            {/*      label={props.header}*/}
            {/*      onChange={handleChange}*/}

            {/*  >*/}
            {/*    {props.values.map((input, index) => {*/}
            {/*      return (*/}
            {/*          <MenuItem key={index} value={input.value}>{input.name}</MenuItem>*/}
            {/*      )*/}
            {/*    })}*/}
            {/*  </Select>*/}
            {/*</FormControl>*/}
            <Typography gutterBottom>{props.header}</Typography>

            <ToggleButtonGroup
                color="primary"
                value={plugType}
                onChange={handleChange}
            >
                {props.values.map((input, index) => {
                    return (
                        <ToggleButton key={index} value={input.value}>{input.name}</ToggleButton>
                    )
                })}
                {/*<ToggleButton value="web">Web</ToggleButton>*/}
                {/*<ToggleButton value="android">Android</ToggleButton>*/}
                {/*<ToggleButton value="ios">iOS</ToggleButton>*/}
            </ToggleButtonGroup>
        </Box>
    );
}
