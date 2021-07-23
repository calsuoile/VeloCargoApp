import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup({ name, value, onChange }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Catégories * : </FormLabel>
      <RadioGroup
        aria-label="category"
        name={name}
        value={value}
        onChange={onChange}
        required={true}
      >
        <FormControlLabel
          value={"biporteur"}
          control={<Radio />}
          label="Biporteur"
        />
        <FormControlLabel
          value={"triporteur"}
          control={<Radio />}
          label="Triporteur"
        />
        <FormControlLabel
          value={"longtail"}
          control={<Radio />}
          label="Longtail"
        />
        <FormControlLabel
          value={"tricyle"}
          control={<Radio />}
          label="Tricyle"
        />
      </RadioGroup>
    </FormControl>
  );
}
