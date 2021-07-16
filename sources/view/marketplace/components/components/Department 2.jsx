import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        margin: theme.spacing(1),
        width: "200px",
        backgroundColor: "white",
        borderRadius: "5px",
    },
  },
}));

export default function Department({ name, value, onChange }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Département" variant="outlined" 
      value={value}
          name={name}
          onChange={onChange}/>
    </form>
  );
}