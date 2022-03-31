import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [plugType, setPlugType] = React.useState('');

  const handleChange = (event) => {
    setPlugType(event.target.value);
  };

  return (
    <Box sx={{maxWidth: 300, pt: 3 }}>
      <FormControl fullWidth>
        <InputLabel htmlFor="plugtype-select">{props.header}</InputLabel>
        <Select
          labelId="plugtype-select-label"
          id="plugtype-select"
          value={plugType}
          label={props.header}
          onChange={handleChange}

        >
          {props.values.map((input, index) => {
            return (
              <MenuItem key={index} value={input.value}>{input.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
