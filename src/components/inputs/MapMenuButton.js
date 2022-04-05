import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';


export default function MapMenuButton(props) {


    return (
        <Box sx={{ m: 1, position: 'absolute', zIndex: 1 }}>
            <Fab color="secondary" size="large" onClick={props.handleOnMenuClick}>
                <MenuIcon />
            </Fab>
        </Box>
    );
}
