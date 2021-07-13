import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "200px",
      backgroundColor: "white",
      borderRadius: "5px",
    },
  },
}));

export default function Brand({ value, onChange, name }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField value={value} onChange={onChange} name={name} id="outlined-basic" label="La marque" variant="outlined" />
    </form>
  );
}
