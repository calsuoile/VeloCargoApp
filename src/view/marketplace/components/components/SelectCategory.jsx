import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    backgroundColor: "white",
    borderRadius: "5px",
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
            name: name,
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value="biporteur">Biporteurs</option>
          <option value="triporteur">Triporteurs</option>
          <option value="tricycle">Tricycles</option>
          <option value="longtail">Longtails</option>
          <option value="accessoires">Accessoires</option>
          <option value="remorque">Remorques</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectCategory;
