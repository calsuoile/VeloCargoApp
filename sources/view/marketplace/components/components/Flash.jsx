import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const useStyles = makeStyles((theme) => ({}));

export default function Flash() {
  const classes = useStyles();

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        ELECTRIQUE <FlashOnIcon />
      </FormLabel>
      <RadioGroup
        aria-label="flash"
        name="flash1"
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Oui" />
        <FormControlLabel value="no" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl>
  );
}
