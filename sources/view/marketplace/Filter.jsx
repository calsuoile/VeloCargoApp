import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StateGeneral from "./components/components/StateGeneral";
import Brand from "./components/components/Brand";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import SelectCategory from "./components/components/SelectCategory";
import CountrySelector from "../../common/components/CountrySelector";
import SwitchForm from "../../common/components/SwitchForm";
import { TextField } from "@material-ui/core";
import RangeSlider from "./components/components/RangeSlider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  filter: {
    margin: "30px",
    backgroundColor: "#5C9A9A",
    borderRadius: "30px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    borderRadius: "30px",
    backgroundColor:"#5C9A9A",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 600,
    fontSize: "20px",
    width: "80%",
    margin:"30px",
    "&:hover": {
      backgroundColor:"#F29F24",
    }
  },
  diff: {
    color: "black",
  },
  icon: {
    marginLeft: "10px",
  },
  title: {
      color: "white",
      fontFamily:"Staatliches, cursive",
      textAlign: "center",
      fontSize: "40px",
  },
  hr: {
    width: "50%",
    marginTop: "8%",
    marginBottom: "10%"
  },
  dep: {
  backgroundColor: "white",
    borderRadius: "5px",
    width: "180px",
    margin:"10px"
  },

}));

function valuetext(value) {
  return `${value}`;
}
function Filter(props) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState({
    category: "",
    country: "",
    department: "",
    brand: "",
    price: "",
    general_state: "",
    electric: false,
    guarantee: false,
  });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(filter);
  };

  const handleChecked = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.checked });
  };

  const handlePrice = (event, newValue) => {
    setFilter({ ...filter, price: newValue });
  };

  return (
    <div className={classes.filter}>
      <Typography gutterBottom variant="h5" className={classes.title}>
        FILTRES
        <hr className={classes.hr}></hr>
      </Typography>
      <SelectCategory
        value={filter.category}
        onChange={handleChange}
        name={"category"}
      />
      <CountrySelector
        value={filter.country}
        onChange={handleChange}
        name={"country"}
      />
      <TextField
        className={classes.dep}
        required={true}
        id="outlined-basic"
        label="Département"
        variant="outlined"
        name="departement"
        form={filter.department}
        onChange={handleChange}
      ></TextField>

      <h5>Prix maximum</h5>

      <RangeSlider
        value={filter.price}
        step={100}
        onChange={handlePrice}
        min={0}
        max={4000}
        name="price"
      />

      <StateGeneral
        value={filter.general_state}
        onChange={handleChange}
        name={"general_state"}
      />
      <Brand onChange={handleChange} value={filter.brand} name={"brand"} />
      <SwitchForm
        name={"electric"}
        checked={filter.electric}
        onChange={handleChecked}
        label={"Electrique"}
        className={classes.check}
      />
      <SwitchForm
        label={"Garantie"}
        checked={filter.guarantee}
        onChange={handleChecked}
        name={"guarantee"}
        className={classes.check}
      />
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Rechercher
        <SearchIcon className={classes.icon}/>
      </Button>
    </div>
  );
}

export default Filter;
