import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "200px",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function StateGeneral({ name, value, onChange }) {
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
          label="Etat General"
          inputProps={{
            name: "general_state",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value="neuf">Neuf</option>
          <option value="revise">Révisé</option>
          <option value="commeneuf">Comme neuf</option>
          <option value="areviser">A réviser</option>
          <option value="areparer">A réparer</option>
        </Select>
      </FormControl>
    </div>
  );
}
export default StateGeneral;
