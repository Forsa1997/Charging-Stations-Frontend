import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import BookmarksSharpIcon from '@mui/icons-material/BookmarksSharp';
import Popover from '@mui/material/Popover';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from '../home-components/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { FILTER_PRESELECT } from '../../actions/types';

export default function BookmarkButton(props) {

    const filters = useSelector(state => state.mapReducer.savedFilters);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFilterSelection = (filter) => {
        dispatch({
            type: FILTER_PRESELECT,
            payload: filter
        })
        props.loadFilter()
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box sx={{ m: 1, position: 'absolute', zIndex: 1, right: 0 }}>
            <Fab color="secondary" size="large" onClick={handleClick}>
                <BookmarksSharpIcon />
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
                    {filters.length === 0 ? <Typography>Currently no saved filters</Typography> : filters.map((filter, index) => <Button key={index} onClick={() => handleFilterSelection(filter)}>{filter.name}</Button>)}
                </Container>
            </Popover>
        </Box>


    );
}
