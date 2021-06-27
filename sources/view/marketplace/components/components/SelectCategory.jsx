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

export default function SelectCategory() {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
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
          Catégorie
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={10}>Biporteur</MenuItem>
          <MenuItem value={20}>Triporteur</MenuItem>
          <MenuItem value={30}>Tricycle</MenuItem>
          <MenuItem value={40}>Longtail</MenuItem>
          <MenuItem value={50}>Remorque</MenuItem>
          <MenuItem value={60}> Accessoires</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
