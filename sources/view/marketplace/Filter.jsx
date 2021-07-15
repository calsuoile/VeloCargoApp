import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StateGeneral from "./components/components/StateGeneral";
import Brand from "./components/components/Brand";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import SelectCategory from "./components/components/SelectCategory";
import CountrySelector from "../../common/components/CountrySelector";
import SwitchForm from "../../common/components/SwitchForm";
import RangeSlider from "./components/components/RangeSlider";
import Department from "./components/components/Department";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  filter: {
    margin: "40px",
    backgroundColor: "#5C9A9A",
    fontSize: "32px",
    borderRadius: "30px",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    borderRadius: "30px",
    backgroundColor:"#006262",
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
  titleprice: {
    marginTop: "30px",
        color: "#006262",
        fontFamily:"Staatliches, cursive",
        fontSize: "20px",
  }

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
    price: 4000,
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
      </Typography>
      <hr className={classes.hr}></hr>
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
      <Department 
      value={filter.department}
      onChange={handleChange}
      name={"department"}/>

      <h1 className={classes.titleprice}>Prix maximum :</h1>

      <RangeSlider
        value={filter.price}
        step={100}
        onChange={handlePrice}
        min={0}
        max={10000}
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
