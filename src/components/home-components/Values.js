import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from './Typography';
import ElectricBoltSharpIcon from '@mui/icons-material/ElectricBoltSharp';
import SwitchAccountSharpIcon from '@mui/icons-material/SwitchAccountSharp';
import MapSharpIcon from '@mui/icons-material/MapSharp';

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
            sx={{display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light'}}
        >
            <Container sx={{mt: 15, mb: 30, display: 'flex', position: 'relative'}}>
                <Box
                    component="img"
                    src="/static/themes/onepirate/productCurvyLines.png"
                    alt="curvy lines"
                    sx={{pointerEvents: 'none', position: 'absolute', top: -180}}
                />
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
                                    'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                                }

                                {
                                    ', go for a mini-vacation just a few subway stops away from your home.'
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
                                    'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                                }

                                {'your Sundays will not be alike.'}
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
                                {'By registering, you will access specially negotiated rates '}
                                {'that you will not find anywhere else.'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductValues;