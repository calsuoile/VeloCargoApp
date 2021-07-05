import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectCategory({ name, value, onChange }) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Catégorie</InputLabel>
        <Select
          required={true}
          native
          value={value}
          name={name}
          onChange={onChange}
          label="Catégorie"
          inputProps={{
            name: "category",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value="biporteur">Biporteur</option>
          <option value="triporteur">Triporteur</option>
          <option value="tricycle">Tricycle</option>
          <option value="longtail">Longtail</option>
          <option value="accessoires">Accessoire</option>
          <option value="remorque">Remorque</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectCategory;