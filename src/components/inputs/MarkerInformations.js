import * as React from 'react';
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from '../home-components/Typography';
import { useSelector } from 'react-redux';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PowerTwoToneIcon from '@mui/icons-material/PowerTwoTone';
import EuroSharpIcon from '@mui/icons-material/EuroSharp';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import { Link } from '@mui/material';

export default function MarkerInformations(props) {

    const station = useSelector(state => state.mapReducer.currentStation);
    let data = station.data ? station.data[0] : {};

    const paperSx = {
        m: 0,
        position: 'relative',
        bgcolor: 'white',
        p: 4,
        border: '1px solid grey',
        borderBottom: 0,
        borderTop: 0,
        borderLeft: 0,
        width: { sm: '19vw', xs: 'calc(100vw - 65px)' },
        minWidth: '286.480px',
        zIndex: 2,
        height: 'calc(100vh - 68.31px - 68.31px)',
        maxHeight: 'calc(100vh - 68.31px - 68.31px)',
        display: 'flex',
        flexDirection: 'column'
    }

    const calculatePlug = (type) => {
        if (type.id === 32 || type.id === 33) {
            return "CCS"
        } else if (type.id === 1036 || type.id === 25) {
            return "Type 2"
        } else if (type.id === 2) {
            return "CHAdeMo"
        }
        else {
            return type.formalName ? type.formalName : "Unknown Plug"
        }
    }

    const calcAvailable = (available) => {
        return available ? 'success' : 'error'
    }

    const statusAvailable = (available) => {
        return available ? <CheckCircleTwoToneIcon color={'success'} /> : <CancelTwoToneIcon color={'error'} />
    }

    const paymentRequired = (id) => {
        switch (id) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 5:
                return "Payment required";
            case 4:
            case 6:
            case 7:
                return "No payment required";
            default:
                return "Payment required";
        }
    }




    return (
        station.data ?
            <Paper elevation={6} sx={paperSx} style={{ overflow: 'auto' }}>
                <Box>
                    <IconButton sx={{ float: 'right', mt: -3, mb: 2 }} onClick={props.handleOnCloseClick}>
                        <CloseIcon color='grey' fontSize='large' />
                    </IconButton>
                </Box>
                <Typography variant="h6">{data.addressInfo.title}</Typography>
                <Divider color={'grey'} sx={{ mt: '23px', mb: '23px' }} />
                <Typography sx={{ mt: '4px', mb: '4px' }} variant="subtitle1">{data.addressInfo.addressLine1}</Typography>
                <Typography sx={{ mt: '4px', mb: '4px' }} variant="subtitle1">{data.addressInfo.postcode} {data.addressInfo.town}</Typography>
                <Divider color={'grey'} sx={{ mt: '23px' }} />
                {data.connections.map(conn => {
                    return <div style={{ marginTop: '25px', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px' }}>
                        <Typography sx={{ mt: '4px', mb: '4px', display: 'flex', alignItems: 'center' }} variant="subtitle1">Status:&nbsp;{statusAvailable(conn.statusType.isOperational)}</Typography>
                        <Typography sx={{ mt: '4px', mb: '4px', display: 'flex', alignItems: 'center' }} variant="subtitle1"><ElectricBoltIcon color={calcAvailable(conn.statusType.isOperational)} />{conn.powerKW + " kW   "}</Typography>
                        <Typography sx={{ mt: '4px', mb: '4px', display: 'flex', alignItems: 'center' }} variant="subtitle1"><PowerTwoToneIcon color={calcAvailable(conn.statusType.isOperational)} />{calculatePlug(conn.connectionType)}</Typography>
                    </div >
                })}
                <Divider color={'grey'} sx={{ mt: '23px', mb: '23px' }} />
                {data.operatorInfo ? <Link sx={{ mt: '4px', mb: '4px' }} target="_blank" href={data.operatorInfo.websiteURL} variant="subtitle1">{data.operatorInfo.title}</Link>
                    : <Typography sx={{ mt: '4px', mb: '4px' }} variant="subtitle1">{data.operatorInfo ? data.operatorInfo : 'No Operator Info'}</Typography>
                }
                <Typography sx={{ mt: '4px', mb: '4px', display: 'flex', alignItems: 'center' }} variant="subtitle1"><EuroSharpIcon />{paymentRequired(data.usageTypeID)}</Typography>
            </Paper >
            :
            <Paper elevation={6} sx={paperSx}>
                <Box>
                    <IconButton sx={{ float: 'right', mt: -3, mb: 2 }} onClick={props.handleOnCloseClick}>
                        <CloseIcon color='grey' fontSize='large' />
                    </IconButton>
                </Box>
                <Typography>No data available</Typography>
                <Divider color={'grey'} sx={{ mt: '23px' }} />
            </Paper>
    )
}