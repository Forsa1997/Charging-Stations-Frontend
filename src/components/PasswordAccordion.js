import React from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { modifyPassword } from '../actions/auth';



const PasswordAccordion = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.user)

    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const toggleShowPassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [passwordFields, setPasswordFields] = React.useState({});
    const updatePasswords = (e) => {
        setPasswordFields({ ...passwordFields, [e.target.name]: e.target.value })
    }

    const passwordFieldData = [
        "old password", "new password", "repeat new password"
    ]

    const modify = () => {
        let passwordRequest = {
            id: user.id,
            oldPassword: passwordFields.input_0,
            newPassword: passwordFields.input_1,
        }
        dispatch(modifyPassword(passwordRequest));
    }
    const [error, setError] = React.useState(false);
    const [color, setColor] = React.useState("text-disabled");
    const [disabled, setDisabled] = React.useState(true);

    React.useEffect(() => {
        let errorFlag0 = false;
        let errorFlag1 = false;
        let errorFlag2 = false;

        if (passwordFields.input_0 && passwordFields.input_0.length < 6) {
            errorFlag0 = true;
        }
        if (passwordFields.input_1 && passwordFields.input_1.length < 6) {
            errorFlag1 = true;
        }
        if (passwordFields.input_2 && passwordFields.input_2 !== passwordFields.input_1) {
            errorFlag2 = true;
        }
        setError({
            ...error,
            0: errorFlag0,
            1: errorFlag1,
            2: errorFlag2,
        })

        if (errorFlag0 || errorFlag1 || errorFlag2) {

            setColor("text-disabled")
            setDisabled(true)
        } else if (passwordFields.input_0 && passwordFields.input_1 && passwordFields.input_2) {
            setColor("primary")
            setDisabled(false)
        }
    }, [passwordFields] // eslint-disable-line react-hooks/exhaustive-deps
    );

    return (
        <Accordion expanded={props.expanded === 'panel' + props.index} sx={{ width: '35%' }} onChange={props.handleChange('panel' + props.index)}>
            <AccordionSummary
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography sx={{ width: '40%', flexShrink: 0 }}>
                    Change Password
                </Typography>
                {(!props.expanded) && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ color: 'text.secondary' }}></Typography>
                        <EditIcon color="primary" />
                    </Box>
                )}
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }} >
                <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginTop: -3 }}>
                    {passwordFieldData.map((data, index) => <FormControl key={index} sx={{ flexBasis: '40%', marginBottom: 2, m: 1 }} variant="standard">
                        <InputLabel>{data}</InputLabel>
                        <Input
                            type={passwordVisible ? "text" : "password"}
                            name={"input_" + index}
                            error={error[index]}
                            onChange={(e) => updatePasswords(e)}
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
                    <IconButton disabled={disabled} onClick={() => modify()}>
                        <SaveIcon fontSize="large" color={color} />
                    </IconButton>
                </Box>

            </AccordionDetails>
        </Accordion>

    )
}
export default PasswordAccordion;