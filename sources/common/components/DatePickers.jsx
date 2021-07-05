import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers({name, onChange, label, value}) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        value={value}
        label={label}
        type="date"
        defaultValue="2017-05-24"
        onChange={onChange}
        name={name}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        
        }}
      />
    </form>
  );
}
