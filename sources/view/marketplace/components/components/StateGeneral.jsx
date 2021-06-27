import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function StateGeneral() {
  const classes = useStyles();
  const [etat, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Etat du produit
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={etat}
          onChange={handleChange}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={10}>Neuf</MenuItem>
          <MenuItem value={20}>Révisé</MenuItem>
          <MenuItem value={30}>Comme neuf</MenuItem>
          <MenuItem value={40}>A réviser</MenuItem>
          <MenuItem value={50}>A réparer</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
