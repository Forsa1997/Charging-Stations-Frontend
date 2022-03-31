import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";
import { useNavigate } from 'react-router';

const theme = createTheme();

const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkLogin = () => navigate('/login')

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(register(data.get('firstName'), data.get('lastName'), data.get('username'), data.get('email'), data.get('password')))
    navigate("../login", { replace: true })
  };

  const [error, setError] = React.useState({});
  const [helperText, setHelperText] = React.useState({});
  const [disabled, setDisabled] = React.useState(true);
  React.useEffect(() => {
    if (Object.values(error).every(value => value === false) && Object.values(error).length === 5) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [error]
  );

  const validate = (e) => {
    let name = e.target.name;
    let value = e.target.value
    if (e.target.value === "") {
      setError({ ...error, [name]: true })
      setHelperText({ ...helperText, [name]: "Must not be empty" })
    } else {
      setError({ ...error, [name]: false })
      setHelperText({ ...helperText, [name]: "" })
    }

    switch (name) {
      case "firstName":
        if (!/^[A-Za-z]+$/.test(value) || value === "") {
          setError({ ...error, [name]: true })
          setHelperText({ ...helperText, [name]: "Must only contain letters" })
        };
        break;
      case "lastName":
        if (!/^[A-Za-z]+$/.test(value) || value === "") {
          setError({ ...error, [name]: true })
          setHelperText({ ...helperText, [name]: "Must only contain letters" })
        };
        break;
      case "username":
        if (e.target.value.length < 4) {
          setError({ ...error, [name]: true })
          setHelperText({ ...helperText, [name]: "Must contain at least 4 characters" })
        };
        break;
      case "email":
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value || value === "")) {
          setError({ ...error, [name]: true })
          setHelperText({ ...helperText, [name]: "Must be a vaild email address" })
        };

        break;
      case "password":
        if (value.length < 6) {
          setError({ ...error, [name]: true })
          setHelperText({ ...helperText, [name]: "Must contain at least 6 characters" })
        };
        break;
      default: ;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={error.firstName}
                  helperText={helperText.firstName}
                  onChange={(e) => validate(e)}
                  onBlur={(e) => validate(e)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={error.lastName}
                  helperText={helperText.lastName}
                  onChange={(e) => validate(e)}
                  onBlur={(e) => validate(e)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={error.username}
                  helperText={helperText.username}
                  onChange={(e) => validate(e)}
                  onBlur={(e) => validate(e)}
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={error.email}
                  helperText={helperText.email}
                  onChange={(e) => validate(e)}
                  onBlur={(e) => validate(e)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={error.password}
                  helperText={helperText.password}
                  onChange={(e) => validate(e)}
                  onBlur={(e) => validate(e)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={handleLinkLogin} variant="body2" sx={{cursor: 'pointer'}}>
                  Already have an account?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;