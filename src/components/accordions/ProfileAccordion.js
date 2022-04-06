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
import { modifyUser } from '../../actions/auth';




const ProfileAccordion = (props) => {
    let user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch();
    const inputField = useRef('')

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
        console.log(user)
        dispatch(modifyUser(user));
    }

    const [error, setError] = React.useState(false);
    const [color, setColor] = React.useState("text-disabled");
    const [disabled, setDisabled] = React.useState(true);

    const validate = (e) => {
        let errorflag = false;
        let change = inputField.current.value;
        if (e.target.value === "") {
            errorflag = true;
        }
        switch (props.name) {
            case "First name":
                if (!/^[A-Za-z]+$/.test(change)) {
                    errorflag = true;
                };
                break;
            case "Last name":
                if (!/^[A-Za-z]+$/.test(change)) {
                    errorflag = true;
                };
                break;
            case "Username":
                if (change.length < 4) {
                    errorflag = true;
                };
                break;
            case "E-Mail":
                if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(change)) {
                    errorflag = true;
                };
                break;
            default: ;
        }

        if (errorflag) {
            setError(true)
            setColor("text-disabled")
            setDisabled(true)
        } else {
            setError(false)
            setColor("primary")
            setDisabled(false)
        }
    }


    return (
        <Accordion expanded={props.expanded === 'panel' + props.index} sx={{ width: '35%', minWidth: '280px' }} onChange={props.handleChange('panel' + props.index)}>
            <AccordionSummary
                aria-controls="panel1bh-content"
                expandIcon={<EditIcon color="primary" />}
            >
                <Typography sx={{ width: { sm: '33%', xs: '40%'} , flexShrink: 0 }}>
                    {props.name}
                </Typography>
                {
                    props.expanded === 'panel' + props.index ? null : <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ color: 'text.secondary' }}>{props.content}</Typography>
                    </Box>
                }
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }} >
                <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, }} variant="standard">
                    <InputLabel >{props.content}</InputLabel>
                    <Input
                        error={error}
                        onChange={(e) => validate(e)}
                        onBlur={(e) => validate(e)}
                        inputRef={inputField}
                        endAdornment={
                            <InputAdornment position="end">
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <IconButton disabled={disabled} onClick={() => modify()}>
                    <SaveIcon fontSize="large" color={color} />
                </IconButton>
            </AccordionDetails>
        </Accordion >
    )
}
export default ProfileAccordion;