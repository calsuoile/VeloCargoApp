import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expandIcon: {
    color: "#006969",
  },
}));

export default function AdsTechnique({ ads }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" className={classes.heading}>
            DIMENSION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le vélo mesure {ads?.length} cm. Le cadre est de {ads?.frame_size} cm.
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
            Eléctrique
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Puissance du moteur : {ads?.engine_power} Watt. Batterie :{" "}
            {ads?.battery_volt} Volt.
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
            Kilométrage
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{ads?.kms} Km.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className={classes.heading}>
            Caisse
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> La caisse est de {ads?.volume_box} litres.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className={classes.heading}>
            Etat Mecanique
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{ads?.mecanic_state}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h5" className={classes.heading}>
            Etat Esthétique
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{ads?.esthetic_state}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
