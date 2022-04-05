import React, { useRef } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { useSelector, useDispatch } from 'react-redux'
import { modifyUser } from '../../actions/auth';
import { removeFilter } from '../../actions/filter';




const FilterAccordion = (props) => {
    const dispatch = useDispatch();

    const remove = () => {
        dispatch(removeFilter(props.name))
    }

    return (
        <Accordion sx={{ width: '35%' }}>
            <AccordionSummary
                aria-controls="panel1bh-content"
                expandIcon={<DeleteSharpIcon color="primary" onClick={() => remove()}/>}
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {props.name}
                </Typography>
            </AccordionSummary>
        </Accordion >
    )
}
export default FilterAccordion;