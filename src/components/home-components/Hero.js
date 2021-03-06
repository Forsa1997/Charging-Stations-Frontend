import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from './Typography';
import HeroLayout from './HeroLayout';
import {useNavigate} from "react-router-dom";
import backgroundImage from '../../assets/charging-image.jpeg'

const Hero = () => {
    const navigate = useNavigate();

    const handleRegisterButton = () => navigate('/register')

    return (
        <HeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{display: 'none'}}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Charge your car
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{mb: 4, mt: {sx: 4, sm: 10, xs: 10}}}
            >
                Enjoy searching charging stations world wide easily
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                sx={{minWidth: 200}}
                onClick={handleRegisterButton}
            >
                Register
            </Button>
            <Typography variant="body2" color="inherit" sx={{mt: 2}}>
                Discover the experience
            </Typography>
        </HeroLayout>
    );
}

export default Hero