import React, { useState, useMemo } from 'react'
import Select from '@material-ui/core/Select';
import countryList from 'react-select-country-list'
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
 selector : {
     width: 400, 
     variant: "outlined",
     color: "green", 
//      marginTop: theme.spacing(2),
 }

})

function CountrySelector() {
 const classes = useStyles();

  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return (
      <div>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Pays</InputLabel>
            <Select options={options} value={value} onChange={changeHandler} className={classes.selector} label="pays" color="primary"/>

            </FormControl>
  
 
  </div>
  )
}

export default CountrySelector; 