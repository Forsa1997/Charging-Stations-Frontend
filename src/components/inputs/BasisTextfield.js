import TextField from '@mui/material/TextField';


export default function BasisSelect() {
    return (
        <TextField
            id="filled-textarea"
            label="Search"
            placeholder="Charging Station"
            multiline
            sx={{ width: '100%', maxWidth: '100%' }}
        />
    )
}