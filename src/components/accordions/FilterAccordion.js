import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { useDispatch } from 'react-redux'
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