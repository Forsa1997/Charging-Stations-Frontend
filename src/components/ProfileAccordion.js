import React, { useRef, Component } from 'react'
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
import { useSelector } from 'react-redux'
import { modifyUser } from '../actions/auth';




const ProfileAccordion = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    let user = useSelector(state => state.authReducer.user);
    const inputField = useRef('')
    const toggleExpanded = () => {
        setExpanded(!expanded);
    }
    const modify = () => {
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
        modifyUser(user);
    }

    return (
        <Accordion sx={{ width: '35%' }} onChange={toggleExpanded}>
            <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                expandIcon={<EditIcon color="primary" />}
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {props.name}
                </Typography>
                {
                    expanded ? null : <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ color: 'text.secondary' }}>{props.content}</Typography>
                    </Box>
                }
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }} >
                <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment">{props.content}</InputLabel>
                    <Input
                        id="standard-adornment"
                        inputRef={inputField}
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <IconButton onClick={modify}>
                    <SaveIcon fontSize="large" color="primary" />
                </IconButton>
            </AccordionDetails>
        </Accordion >
    )
}
export default ProfileAccordion;