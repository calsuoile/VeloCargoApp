import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "80%",
  },
  slider: {
    color: "red",
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({ min, max, step, onChange, value}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        className={classes.slider}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        
      />
    </div>
  );
}