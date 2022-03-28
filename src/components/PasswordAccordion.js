import React from "react";
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const PasswordAccordion = () => {
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    }
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const toggleShowPassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const passwordFieldData = [
        "old password", "new password", "repeat new password"
    ]


    return (
        <Accordion sx={{ width: '35%' }} onChange={toggleExpanded}>
            <AccordionSummary
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography sx={{ width: '40%', flexShrink: 0 }}>
                    Change Password
                </Typography>
                {(!expanded) && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ color: 'text.secondary' }}></Typography>
                        <EditIcon color="primary" />
                    </Box>
                )}
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }} >
                <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }}>
                    {passwordFieldData.map((data, index) => <FormControl key={index} sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">{data}</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={passwordVisible ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowPassword}
                                    >
                                        {passwordVisible ? <VisibilityOff color="primary" /> : <Visibility color="primary" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>)}
                    <IconButton>
                        <SaveIcon fontSize="large" color="primary" />
                    </IconButton>
                </Box>

            </AccordionDetails>
        </Accordion>

    )
}
export default PasswordAccordion;