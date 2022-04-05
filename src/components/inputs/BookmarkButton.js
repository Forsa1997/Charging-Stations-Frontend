import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import BookmarksSharpIcon from '@mui/icons-material/BookmarksSharp';
import Popover from '@mui/material/Popover';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function BookmarkButton() {

    const test = ['Filternummer1', '1234567890123456789012345', 'Filternummer3', "Filternummer4", "Filternummer5"]

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box sx={{m: 1, position: 'absolute', zIndex: 1, right: 0}}>
            <Fab color="secondary" size="large" onClick={handleClick}>
                <BookmarksSharpIcon/>
            </Fab>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}

            >
                <Container sx={{
                    marginTop: 1,
                    marginBottom: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {test.map(filter => <Button>{filter}</Button>)}
                </Container>
            </Popover>
        </Box>


    );
}
