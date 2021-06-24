import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchForm({label}) {
    const [state, setState] = React.useState({
 
      checkedB: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    return ( 
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
              // inputProps={{required : false}}
            />
          }
          label={label}
        />
    )}; 