import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../actions/auth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from '../assets/logo.png'
import Fab from '@mui/material/Fab';
import MapSharpIcon from '@mui/icons-material/MapSharp';

const logoutText = "Logout";
const loginText = "Login";
const registerText = "Register"
const profileText = "Profile";
const pages = ['Map'];
let settings = [];
let user;

const Nav = () => {
    user = useSelector(state => state.authReducer.user)
    settings = user === null ? [loginText, registerText] : [profileText, logoutText]
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleRegisterButton = () => navigate('/')

    const handleCloseNavMenu = (page = "") => {
        if (page === logoutText) {
            dispatch(logout());
            page = loginText;
        }
        setAnchorElUser(null);
        navigate(`/${page.toLowerCase()}`)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={{ zIndex: 100, maxWidth: '100vw' }}>
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: { xs: '15px' } }}>
            
                    <Fab color='darkerPrimary' size='medium' sx={{marginLeft: 1, display: { xs: 'none', md: 'block' }}} onClick={handleRegisterButton} ><img src={logo} alt="logo" 
                        style={{ width: 30, height: 30, marginTop: '3px' }} /></Fab>
                {pages.map((page) => (
                    <Fab 
                        color='secondary'
                        variant="extended"
                        className="menuButtonNav"
                        size='small'
                        key={page}
                        onClick={() => handleCloseNavMenu(page)}
                        sx={{ my: 2, marginLeft: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}
                    >
                        {page}{' '}<MapSharpIcon />
                    </Fab>
                ))}
                <Fab color='darkerPrimary' size='medium' sx={{ display: { xs: 'block', md: 'none' }, right: '14px' }}><img src={logo} alt="logo" onClick={handleRegisterButton}
                    style={{ width: 30, height: 30, marginTop: '3px' }} /></Fab>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Fab 
                            color='secondary'
                            variant="extended"
                            className="menuButtonNav"
                            size='small'
                            key={page}
                            onClick={() => handleCloseNavMenu(page)}
                            sx={{ my: 2, marginLeft: 1, display: 'flex', alignItems: 'center' }}
                        >
                            {page}{' '}<MapSharpIcon />
                        </Fab>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, boxShadow: '0px 0px 8px #072895', marginLeft: '7.5px' }}>
                            {user === null ? <Avatar sx={{ bgcolor: '#1565c0' }}><PersonOutlineIcon /></Avatar> :
                                <Avatar {...stringAvatar(`${user.firstName} ${user.lastName}`)} />}
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={() => handleCloseNavMenu(setting)}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {

    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };


}

export default Nav;


