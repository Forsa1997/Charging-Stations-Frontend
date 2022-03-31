import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from './Typography';
import ElectricBoltSharpIcon from '@mui/icons-material/ElectricBoltSharp';
import SwitchAccountSharpIcon from '@mui/icons-material/SwitchAccountSharp';
import MapSharpIcon from '@mui/icons-material/MapSharp';

const backgroundValues = `
https://images.unsplash.com/photo-1561542611-7af32c97f8db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80`

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

function ProductValues() {
    return (
        <Box
            component="section"
            sx={{
                boxShadow: '0px 6px 8px #3B3B3B inset',
                display: 'flex',
                overflow: 'hidden',
                bgcolor: 'secondary.light',
                backgroundImage: `url(${backgroundValues})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center' }}
        >
            <Container sx={{mt: 15, mb: 20, display: 'flex', position: 'relative', marginRight: 'auto'}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                alt="lightning"
                                sx={{height: 55}}
                            >
                                <ElectricBoltSharpIcon style={{fontSize: 50}}/>
                            </Box>
                            <Typography variant="h6" sx={{my: 5}}>
                                Super fast chargers
                            </Typography>
                            <Typography variant="h5">
                                {
                                    'We are also supporting the fastest available chargers on our map.'
                                }

                                {
                                    ` So if you are in hurry, you won't regret using these.`
                                }
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                alt="graph"
                                sx={{height: 55}}
                            >
                                <SwitchAccountSharpIcon style={{fontSize: 50}}/>
                            </Box>
                            <Typography variant="h6" sx={{my: 5}}>
                                Personalized usage
                            </Typography>
                            <Typography variant="h5">
                                {
                                    'Create an account to use all features supported on our website.'
                                }

                                {' Just save your favorite charging stations to find them quickly.'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                alt="clock"
                                sx={{height: 55}}
                            >
                                <MapSharpIcon style={{fontSize: 50}}/>
                            </Box>
                            <Typography variant="h6" sx={{my: 5}}>
                                smart and user friendly map
                            </Typography>
                            <Typography variant="h5">
                                {'You can apply filters to list the charging stations you really want to see.'}
                                {' Every single charging station has all the information you need.'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductValues;