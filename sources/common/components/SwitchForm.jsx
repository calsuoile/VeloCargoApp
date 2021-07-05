import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchForm({ label, onChange, checked, name }) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          name={name}
          color="primary"
          // inputProps={{required : false}}
        />
      }
      label={label}
    />
  );
}
