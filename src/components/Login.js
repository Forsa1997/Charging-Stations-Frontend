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
import { login } from '../actions/auth';
import { useDispatch, useSelector } from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import Alert from '@mui/material/Alert';


const theme = createTheme();



const Login = () => {

  const [showError, setShowError] = React.useState(false);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLinkRegister = () => navigate('/register')

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let resolve = await dispatch(login(data.get('email'), data.get('password')))
    setShowError(!resolve);

  };

  return (
    useSelector(state => state.authReducer.isLoggedIn) ? <Navigate to="/profile"></Navigate> :
        <ThemeProvider theme={theme}>
          <Helmet>
            <title>EV-Map | Login</title>
          </Helmet>
        <Container component="main" maxWidth="xs" >
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
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {showError && <Alert severity="error">Username or password is wrong.</Alert>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {/*Forgot password?*/}
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={handleLinkRegister} sx={{cursor: 'pointer'}} variant="body2">
                    {"Don't have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
  );
}

export default Login