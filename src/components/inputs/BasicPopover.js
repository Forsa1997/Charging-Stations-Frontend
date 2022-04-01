import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BasicSelect from "./BasicSelect"
import BasicSlider from "./BasicSlider"
import BasicTextField from "./BasisTextfield"
import ChipSelect from './ChipSelect'
import referenceData from '../../data/referenceData'
import MenuIcon from '@mui/icons-material/Menu';

const BasicPopover = () => {

  const plugTypes = [{ value: "all", name: "All" },{ value: "type2", name: "Type 2" }, { value: "ccs", name: "CCS" }]
  const chargingProviders = referenceData.Operators
  const chargingFree = [{ value: "all", name: "All" },{ value: "no", name: "No" }, { value: "yes", name: "Yes" }]
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
    <div>
      <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
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
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        <BasicTextField />
        <BasicSlider marks={marks} max={300} min={0} steps={5} default={50} />
        <BasicSelect filterType="FILTER_PLUGTYPE" values={plugTypes} header="Plug Type" />
        <ChipSelect  values={chargingProviders} header="Operator" />
        <BasicSelect filterType="FILTER_FREETOUSE" values={chargingFree} header="Free to use" />
      </Popover>
    </div>
  );
}

export default BasicPopover