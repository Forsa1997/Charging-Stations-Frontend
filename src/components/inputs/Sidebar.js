import * as React from 'react';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
    <Box component="polygon" sx={{
        position: 'absolute',
        bgcolor: 'white',
        p: 7,
        border: '1px solid grey',
        zIndex: 10000,
        borderBottom: 0,
        borderTop: 0,
        borderLeft: 0,
        width: '20%',
        height: 'calc(100vh - 68px)'
    }}
    />
);

export default function Sidebar() {
    const [checked, setChecked] = React.useState(false);

    const handleOnMenuClick = () => {
        setChecked(prev => !prev);
    }
    return (
            <Box
                sx={{
                    '& > :not(style)': {
                        width: '20%',
                        height: 'calc(100vh - 68px)',
                    },
                }}
            >
                        <Collapse orientation="horizontal" in={checked}>
                            {icon}
                        </Collapse>
            </Box>
    );
}