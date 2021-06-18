import React, { useState, useMemo } from 'react'
import Select, { components } from "react-select";
import countryList from 'react-select-country-list'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
 selector : {
     width: 250, 
     variant: "outlined",
     color: "green", 
     marginTop: "10px"

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
            
            <h5>Pays</h5>
            <Select options={options} value={value} onChange={changeHandler} className={classes.selector} label="pays" color="primary"/>

            
  
 
  </div>
  )
}

export default CountrySelector; 