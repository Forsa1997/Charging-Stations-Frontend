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
import SaveIcon from '@mui/icons-material/Save';
import { useSelector, useDispatch } from 'react-redux'
import { modifyUser } from '../actions/auth';




const ProfileAccordion = (props) => {
    let user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const inputField = useRef('')

    const modify = () => {
        console.log("MODIFY")
        console.log(props.name)
        let change = inputField.current.value;
        let attribute;
        switch (props.name) {
            case "First name": attribute = "firstName";
                break;
            case "Last name": attribute = "lastName";
                break;
            case "Username": attribute = "username";
                break;
            case "E-Mail": attribute = "email";
                break;
            default: attribute = null;
        }
        user = { ...user, [attribute]: change };
        console.log(user)
        dispatch(modifyUser(user));
    }

    return (
        <Accordion expanded={props.expanded === 'panel' + props.index} sx={{ width: '35%' }} onChange={props.handleChange('panel' + props.index)}>
            <AccordionSummary
                aria-controls="panel1bh-content"
                expandIcon={<EditIcon color="primary" />}
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {props.name}
                </Typography>
                {
                    props.expanded === 'panel' + props.index ? null : <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ color: 'text.secondary' }}>{props.content}</Typography>
                    </Box>
                }
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }} >
                <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                    <InputLabel >{props.content}</InputLabel>
                    <Input
                        inputRef={inputField}
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <IconButton onClick={() => modify()}>
                    <SaveIcon fontSize="large" color="primary" />
                </IconButton>
            </AccordionDetails>
        </Accordion >
    )
}
export default ProfileAccordion;