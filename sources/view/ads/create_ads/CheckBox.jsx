import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckBox({label}) {
    const [state, setState] = React.useState({
      checkedA: false,
      
    });
  
    const handleCheck = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleCheck} name="checkedA" />}
        label={label}
      />
    )}