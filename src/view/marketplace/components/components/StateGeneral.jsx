import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "200px",
    backgroundColor: "white",
    borderRadius: "5px",
    margin: "10px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function StateGeneral({ name, value, onChange, label }) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Etat Général
        </InputLabel>
        <Select
          required={true}
          native
          value={value}
          name={name}
          onChange={onChange}
          label={label}
          inputProps={{
            name: "general_state",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value="Neuf">Neuf</option>
          <option value="Revisé">Révisé</option>
          <option value="Comme neuf">Comme neuf</option>
          <option value="A réviser">A réviser</option>
          <option value="A réparer">A réparer</option>
        </Select>
      </FormControl>
    </div>
  );
}
export default StateGeneral;
