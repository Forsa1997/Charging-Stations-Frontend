import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { saveFilter } from '../../actions/filter';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

export default function SaveFilterDialog() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const inputField = useRef('')
  const user = useSelector(state => state.authReducer.user)
  const activeFilters = useSelector(state => state.mapReducer.activeFilters)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancelClose = () => {
    setOpen(false);
  };

  const handleSaveClose = () => {
    setOpen(false);
    // if(inputField.current.value >= 1){
      let filter = {
        ...activeFilters, name: inputField.current.value, userId: user.id,
      }
      // console.log(filter)
      dispatch(saveFilter(filter))
    // }
  };

  return (
    <div>
      <Button variant="contained" size="medium" onClick={handleClickOpen}>
        Save Filter
      </Button>
      <Dialog open={open} onClose={handleCancelClose}>
        <DialogTitle>Save current filter</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {user ? "To save a search filter, please enter a name here." : "To save a filter you need to be logged in"}
          </DialogContentText>
          <TextField
            inputRef={inputField}
            autoFocus
            margin="dense"
            id="name"
            label="Filtername"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClose}>Cancel</Button>
          <Button onClick={handleSaveClose} disabled={user ? false : true}>Save</Button>
    
        </DialogActions>
      </Dialog>
    </div>
  );
}
