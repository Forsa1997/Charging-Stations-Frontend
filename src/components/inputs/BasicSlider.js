import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const marks = [
  {
    value: 0,
    label: '0KW',
  },
  {
    value: 50,
    label: '50KW',
  },
  {
    value: 150,
    label: '150KW',
  },
  {
    value: 300,
    label: '300KW',
  },
];

function valuetext(value) {
  return `${value}KW`;
}

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 300 }}>
               <Typography gutterBottom>Charging Power</Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={50}
        getAriaValueText={valuetext}
        step={5}
        marks={marks}
        valueLabelDisplay="on"
        max={300}
      />
    </Box>
  );
}