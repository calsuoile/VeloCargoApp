import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DatePickers from "../../../../common/components/DatePickers";
import { TextField } from "@material-ui/core";
import CountrySelector from "../../../../common/components/CountrySelector";
import Button from "@material-ui/core/Button";
import RadioButtonsGroup from "../../../../common/RadioButtonsGroup";
import { useRouter } from "next/router";
import axios from "axios";
import Upload from "../../../../common/components/Upload";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";


const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
      marginLeft: "50px",
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
  
    intro: {
      display: "flex",
    },
  
    country: {
      width: 100,
      color: "rgba(104, 219, 150, 1)",
      marginTop: 50,
    },
  
    dep: {
      width: 200,
      marginLeft: 20,
    },
  
    localisation: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
      margin: 25,
    },
  
    velo: {
      marginRight: 40,
      width: 300,
    },
    description: {
      marginTop: 20,
      width: 600,
    },
  
    contain: {
      display: "flex",
      flexDirection: "column",
      padding: 10,
      margin: 10,
      justifyContent: "space-evenly",
    },
    margin: {
      marginBottom: 15,
    },
  
    button: {
      marginTop: 10,
      marginBottom: 10,
      display: "flex",
      marginLeft: "90%",
    },
  }));

function AdsAccessorie(props) {
    const classes = useStyles();

const [form, setForm] = React.useState({
  title: "",
  created_at: "",
  description: "",
  country: "",
  department: "",
  price:"",
  rain_tente: "",
  protective_cover: "",
  bicycle_bag: "",
  seat_cushion: "",
  footrest_footwedge: "",
  crutches: "",
  luggage_rack: "",
  child_seat: "",
  others: "",
  photo: [],
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleClick = () => {
  console.log(form);
  postForm();
};

const handlePicture = (imageUrl) => {
  console.log(imageUrl);
  const newImages = [...form.photo, imageUrl];
  setForm({ ...form, photo: newImages });
  console.log(newImages);
};

const router = useRouter();

const postForm = () => {
  const token = localStorage.getItem("userToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios.post(`http://localhost:3030/accessories`, form, config).then(() => {
    router.push("/");
  });
};
  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h5">DEPOSER UNE ANNONCE</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" className={classes.heading}>
              1. INTRODUCTION
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={classes.intro}>
                <TextField
                  required={true}
                  className={classes.title}
                  id="outlined-basic"
                  label="Titre de l'annonce"
                  variant="outlined"
                  name="title"
                  form={form.title}
                  onChange={handleChange}
                ></TextField>
                <DatePickers
                  value={form.created_at}
                  className={classes.date}
                  name={"created_at"}
                  onChange={handleChange}
                />
              </div>
              <TextField
                className={classes.description}
                required={true}
                multiline={true}
                variant="outlined"
                id="outlined-basic"
                label="Description"
                name="description"
                form={form.description}
                onChange={handleChange}
                placeholder="Ici n'hésitez pas à renseigner toutes informations qui pourraient intéresser l'acheteur : anecdotes, détails esthétiques, confort de l'assise, entretient du vélo..."
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
              2. LOCALISATION
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5" width="100%">
              <div className={classes.localisation}>
                <CountrySelector
                  value={form.country}
                  onChange={handleChange}
                  name={"country"}
                />
                <TextField
                  className={classes.velo}
                  required={true}
                  id="outlined-basic"
                  label="Département"
                  variant="outlined"
                  name="department"
                  form={form.department}
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
              3. ACCESSOIRE
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
               
                <FormControl component="fieldset">
                  <FormLabel component="legend">Catégories  : </FormLabel>
                  <RadioGroup
                    aria-label="category"
                  >
                    <FormControlLabel
                      value={"seat_cushion"}
                      control={<Radio />}
                      label="Coussin de siège"
                    />
                    <FormControlLabel
                      value={"footrest_footwedge"}
                      control={<Radio />}
                      label="Repose pieds"
                    />
                    <FormControlLabel
                      value={"crutches"}
                      control={<Radio />}
                      label="Béquilles"
                    />

                    <FormControlLabel
                      value={"luggage_rack"}
                      control={<Radio />}
                      label="Porte-bagages"
                    />

                    <FormControlLabel
                      value={"child_seat"}
                      control={<Radio />}
                      label="Siège Enfant"
                    />
                    
                    <FormControlLabel
                      value={"others"}
                      control={<Radio />}
                      label="Autres"
                    />
                  </RadioGroup>
                </FormControl>

                <TextField
                className={classes.velo}
                required={true}
                id="outlined-basic"
                label="Prix €"
                variant="outlined"
                name="price"
                form={form.price}
                onChange={handleChange}
              ></TextField>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h5" className={classes.heading}>
              7. PHOTOS
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={classes.margin}>
                {form.photo.map((image, index) => {
                  return <img src={image} alt="" key={index} width="150px" />;
                })}
                <Typography className={classes.contain}>
                  <Upload handlePicture={handlePicture} />
                </Typography>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClick}
        >
          Soumettre
        </Button>
      </div>
    </div>
  );
}

export default AdsAccessorie;
