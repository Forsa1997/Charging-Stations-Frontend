import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, providerName, theme) {
  return {
    fontWeight:
    providerName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props) {
  const theme = useTheme();
  const [providerName, setProviderName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProviderName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box sx={{maxWidth: 300, pt: 3 }}>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="provider-selector-label">{props.header}</InputLabel>
        <Select
          labelId="provider-selector-label"
          id="provider-selector"
          multiple
          value={providerName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-provider" label="Provider" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.values.map((inputs) => (
            <MenuItem
              key={inputs.Title}
              value={inputs.Title}
              style={getStyles(inputs.Title, providerName, theme)}
            >
              {inputs.Title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
