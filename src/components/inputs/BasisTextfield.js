import TextField from '@mui/material/TextField';


export default function BasisSelect() {
    return (
        <TextField
            id="filled-textarea"
            label="Search"
            placeholder="Charging Station"
            multiline
            sx={{ width: 300, maxWidth: 300 }}
        />
    )
}