import * as React from 'react';
import Paper from "@mui/material/Paper";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";



export default function MarkerInformations(props) {

    return (

        <Paper elevation={6}
               sx={{
                   m: 0,
                   position: 'relative',
                   bgcolor: 'white',
                   p: 4,
                   border: '1px solid grey',
                   borderBottom: 0,
                   borderTop: 0,
                   borderLeft: 0,
                   width: {sm: '19vw', xs: 'calc(100vw - 65px)'},
                   minWidth: '286.480px',
                   zIndex: 2,
                   height: 'calc(100vh - 68.31px - 68.31px)',
                   maxHeight: 'calc(100vh - 68.31px - 68.31px)',
                   display: 'flex',
                   flexDirection: 'column'
               }}
        >
            <Box>
                <IconButton sx={{ float: 'right', mt: -3, mb: 2 }} onClick={props.handleOnMarkerClick}>
                    <CloseIcon color='grey' fontSize='large' />
                </IconButton>
            </Box>
            <Divider color={'grey'} sx={{mt: '23px' }}/>
            
        </Paper>
    )
}