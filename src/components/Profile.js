import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SaveIcon from '@mui/icons-material/Save';

const Profile = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const changeHandle = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const { user: currentUser } = useSelector((state) => state.authReducer);
    if (!currentUser) {
        return (<Navigate to="/login"></Navigate>)
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: "column", marginTop: 100 }}>
            <Accordion sx={{ width: '35%' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"

                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        First name
                    </Typography>
                    {(expanded !== 'panel1') && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography sx={{ color: 'text.secondary' }}>FIRST NAME</Typography>
                            <EditIcon color="primary" />
                        </Box>
                    )}
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }} >
                    <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">First name</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            endAdornment={
                                <InputAdornment position="end">
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <IconButton>
                        <SaveIcon fontSize="large" color="primary"/>
                    </IconButton>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: '35%' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"

                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Last name
                    </Typography>
                    {(expanded !== 'panel2') && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography sx={{ color: 'text.secondary' }}>LAST NAME</Typography>
                            <EditIcon color="primary" />
                        </Box>
                    )}
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }}>
                    <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Last name</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            endAdornment={
                                <InputAdornment position="end">
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <IconButton>
                        <SaveIcon fontSize="large" color="primary"/>
                    </IconButton>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: '35%' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"

                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Username
                    </Typography>
                    {(expanded !== 'panel3') && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography sx={{ color: 'text.secondary' }}>USERNAME</Typography>
                            <EditIcon color="primary" />
                        </Box>
                    )}
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }}>
                    <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Username</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            endAdornment={
                                <InputAdornment position="end">
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <IconButton>
                        <SaveIcon fontSize="large" color="primary"/>
                    </IconButton>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: '35%' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>E-Mail</Typography>
                    {(expanded !== 'panel4') && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography sx={{ color: 'text.secondary' }}>EMAIL@FAKULTAET.DE</Typography>
                            <EditIcon color="primary" />
                        </Box>
                    )}
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }}>
                    <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">E-Mail</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            endAdornment={
                                <InputAdornment position="end">
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <IconButton>
                        <SaveIcon fontSize="large" color="primary"/>
                    </IconButton>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: '35%' }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Password
                    </Typography>
                    {(expanded !== 'panel5') && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography sx={{ color: 'text.secondary' }}>********</Typography>
                            <EditIcon color="primary" />
                        </Box>
                    )}
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }} >
                    <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }}>
                        <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Old password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={changeHandle('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">New password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={changeHandle('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl sx={{ flexBasis: '40%', marginBottom: 2, m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Repeat new password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={changeHandle('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <IconButton>
                            <SaveIcon fontSize="large" color="primary"/>
                        </IconButton>
                    </Box>

                </AccordionDetails>
            </Accordion>
        </div>)
}

export default Profile;


