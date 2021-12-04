import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "80%",
  },
  slider: {
    color: "#F29F24",
    width: "100%",
    marginTop:"20px",
    "& .MuiSlider-valueLabel": {
      color: "#F29F24",
    },
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({ min, max, step, onChange, value, name }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        className={classes.slider}
        value={value}
        min={min}
        max={max}
        name={name}
        step={step}
        onChange={onChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
