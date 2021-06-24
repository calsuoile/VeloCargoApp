import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  // root: {
  //   color: 'red',
  //   '&$checked': {
  //     color: 'green',
  //   },
  // }
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
    <FormControl component="fieldset">
      <FormLabel component="legend">GARANTIE</FormLabel>
      <RadioGroup  aria-label="garant" name="garant1" value={value} onChange={handleChange} >
        <FormControlLabel className={classes.root} value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl>
  );
}