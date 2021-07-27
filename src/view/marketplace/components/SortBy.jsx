import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SortBy({ onChange, order }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChangeSort = (event) => {
    onChange(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          TRIER PAR
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={order}
          onChange={handleChangeSort}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={"sort=created_at&order=desc"}>Plus récents</MenuItem>
          <MenuItem value={"sort=created_at&order=asc"}>Plus anciens</MenuItem>
          <MenuItem value={"sort=price&order=asc"}>Prix croissant</MenuItem>
          <MenuItem value={"sort=price&order=desc"}>Prix décroissant</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
