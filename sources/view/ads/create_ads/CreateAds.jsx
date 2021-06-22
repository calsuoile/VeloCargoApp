import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DatePickers from "../../../common/components/DatePickers";
import { TextField } from "@material-ui/core";
import CheckBox from "./CheckBox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },

  expandIcon: {
    color: "rgba(104, 219, 150, 1)",
  },

  title: {
    width: 400,
    marginBottom: 20,
  },

  intro : { 
      display: "flex", 
    
  },

  country: {
      width: 100,
    color: "rgba(104, 219, 150, 1)",
    marginTop: 50,
  },

  dep : {
      width: 200, 
      marginLeft: 20
  },

  localisation: {
    display: "flex",
    
    justifyContent: "space-evenly",
    flexDirection: "row",
    margin: 25
  },

  velo : {
      marginRight : 40,
      width: 200
  }, 
  description: {
      marginTop: 20,
      width: 600, 

  }
}));

export default function CreateAds() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5">DEPOSER UNE ANNONCE</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" className={classes.heading}>
          INTRODUCTION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <div className={classes.intro}>
            <TextField
              className={classes.title}
              id="outlined-basic"
              label="Titre de l'annonce"
              variant="outlined"
              name="titre"
              value={value}
              onChange={handleChange}
            ></TextField>
            <DatePickers className={classes.date}/>
            </div>
            <TextField
              className={classes.description}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              name="description"
              value={value}
              onChange={handleChange}
            ></TextField>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className={classes.heading}>
            LOCALISATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography variant="outlined" width="100%">
       
            <div className={classes.localisation}>
            <TextField
              className={classes.dep}
              id="outlined-basic"
              label="Département"
              variant="outlined"
              name="departement"
              value={value}
              onChange={handleChange}
            ></TextField>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className={classes.heading}>
            Vélo
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              Type :
              <CheckBox label={"Biporteur"} />
              <CheckBox label={"Triporteur"} />
              <CheckBox label={"Longtail"} />
            </div>
            <div>
              <TextField  className={classes.velo}
              id="outlined-basic"
              label="Marque"
              variant="outlined"
              name="brand"
              value={value}
              onChange={handleChange}></TextField>
         
          
              <TextField  className={classes.velo}
              id="outlined-basic"
              label="Modèle"
              variant="outlined"
              name="model"
              value={value}
              onChange={handleChange}></TextField>
         
           
              <TextField  className={classes.velo}
              id="outlined-basic"
              label="Prix €"
              variant="outlined"
              name="price"
              value={value}
              onChange={handleChange}></TextField>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className={classes.heading}>
            Roues
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className={classes.heading}>
            Moteur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h5" className={classes.heading}>
            Accessoires
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
