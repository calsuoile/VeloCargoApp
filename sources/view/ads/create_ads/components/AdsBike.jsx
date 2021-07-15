import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { TextField } from "@material-ui/core";
import CountrySelector from "../../../../common/components/CountrySelector";
import Button from "@material-ui/core/Button";
import SwitchForm from "../../../../common/components/SwitchForm";
import RadioButtonsGroup from "../../../../common/RadioButtonsGroup";
import { useRouter } from "next/router";
import axios from "axios";
import Upload from "../../../../common/components/Upload";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    marginLeft: "100px",
    paddingTop: "80px",
    paddingBottom: "80px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "100%",
      marginLeft: "2px",
      marginRight: "2px",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
  form: {
    marginLeft: "100px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "100%",
      marginLeft: "2px",
    },
  },

  expandIcon: {
    color: "#B4B8D4",
  },
  title1: {
    fontFamily: "Staatliches",
    fontSize: "60px",
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      marginTop: "20px",
    },
  },

  intro: {
    display: "flex",
    flexDirection: "column",
  },

  title: {
    width: 600,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "100%",
    },
  },
  description: {
    width: 600,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "100%",
    },
  },

  country: {
    width: 100,
    color: "rgba(104, 219, 150, 1)",
    marginTop: 50,
  },

  localisation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 25,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      flexDirection: "column",
      margin: 0,
      alignItems: "flex-start",
    },
  },

  velo: {
    marginRight: 40,
    width: 500,
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  contain: {
    width: "100%",
  },
  margin: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    display: "flex",
    marginLeft: "85%",

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      marginLeft: "auto",
    },
  },
}));

export default function AdsBike(props) {
  const classes = useStyles();

  const [form, setForm] = useState({
    title: "",
    created_at: "",
    description: "",
    country: "",
    department: "",
    type: "",
    brand: "",
    model: "",
    price: "",
    frame_size: "",
    build_year: "",
    bicycode: "",
    kms: "",
    length: "",
    volume_box: "",
    general_state: "",
    mecanic_state: "",
    esthetic_state: "",
    info_guarantee: "",
    guarantee: false,
    electric: false,
    engine_power: "",
    battery_volt: "",
    photo: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChecked = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
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

  //donne l'accès seulement aux utilisateurs connectés de poster une annonce
  const postForm = () => {
    const token = localStorage.getItem("userToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.post(`http://localhost:3030/cargobikes`, form, config).then(() => {
      router.push("/");
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title1}>
        DÉPOSER UNE ANNONCE
      </Typography>
      <div className={classes.form}>
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
            <div className={classes.contain}>
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
                </div>
              </Typography>
            </div>
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
              3. VELO
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                <RadioButtonsGroup
                  value={form.type}
                  onChange={handleChange}
                  name={"type"}
                />
              </div>
              <div>
                <TextField
                  className={classes.velo}
                  id="outlined-basic"
                  label="Marque"
                  variant="outlined"
                  name="brand"
                  form={form.brand}
                  onChange={handleChange}
                ></TextField>

                <TextField
                  className={classes.velo}
                  id="outlined-basic"
                  label="Modèle"
                  variant="outlined"
                  name="model"
                  form={form.model}
                  onChange={handleChange}
                ></TextField>

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
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h5" className={classes.heading}>
              4. CARACTERISTIQUES
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.contain}>
              <div className={classes.margin}>
                <Typography>
                  <TextField
                    className={classes.velo}
                    id="outlined-basic"
                    label="Taille du Cadre (cm)"
                    variant="outlined"
                    name="frame_size"
                    form={form.frame_size}
                    onChange={handleChange}
                  ></TextField>
                </Typography>
              </div>
              <div className={classes.margin}>
                <Typography>
                  <TextField
                    className={classes.velo}
                    id="outlined-basic"
                    label="Année de construction"
                    variant="outlined"
                    name="build_year"
                    form={form.build_year}
                    onChange={handleChange}
                  ></TextField>
                </Typography>
              </div>
              <div className={classes.margin}>
                <Typography>
                  <TextField
                    className={classes.velo}
                    id="outlined-basic"
                    label="Bicycode"
                    variant="outlined"
                    name="bicycode"
                    form={form.bicycode}
                    onChange={handleChange}
                  ></TextField>
                </Typography>
              </div>

              <div className={classes.margin}>
                <Typography>
                  <TextField
                    className={classes.velo}
                    id="outlined-basic"
                    label="Kilométrage"
                    variant="outlined"
                    name="kms"
                    form={form.kms}
                    onChange={handleChange}
                  ></TextField>
                </Typography>
              </div>
              <div className={classes.margin}>
                <Typography>
                  <TextField
                    className={classes.velo}
                    id="outlined-basic"
                    label="Longueur (cm)"
                    variant="outlined"
                    name="length"
                    form={form.length}
                    onChange={handleChange}
                  ></TextField>
                </Typography>
              </div>
              <div className={classes.margin}>
                {" "}
                <Typography>
                  <TextField
                    className={classes.velo}
                    id="outlined-basic"
                    label="Volume Caisse (L)"
                    variant="outlined"
                    name="volume_box"
                    form={form.volume_box}
                    onChange={handleChange}
                  ></TextField>
                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h5" className={classes.heading}>
              5. ETAT
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.contain}>
              <Typography>
                <div className={classes.margin}>
                  {" "}
                  <Typography>
                    <TextField
                      className={classes.velo}
                      required={true}
                      id="outlined-basic"
                      label="Etat Général"
                      variant="outlined"
                      name="general_state"
                      form={form.general_state}
                      onChange={handleChange}
                    ></TextField>
                  </Typography>
                </div>
                <div className={classes.margin}>
                  {" "}
                  <Typography>
                    <TextField
                      className={classes.velo}
                      id="outlined-basic"
                      label="Etat Mécanic"
                      variant="outlined"
                      name="mecanic_state"
                      form={form.mecanic_state}
                      onChange={handleChange}
                    ></TextField>
                  </Typography>
                </div>
                <div className={classes.margin}>
                  {" "}
                  <Typography>
                    <TextField
                      className={classes.velo}
                      id="outlined-basic"
                      label="Etat Esthétique"
                      variant="outlined"
                      name="esthetic_state"
                      form={form.esthetic_state}
                      onChange={handleChange}
                    ></TextField>
                  </Typography>
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h5" className={classes.heading}>
              6. GARANTIE
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {" "}
              <div className={classes.margin}>
                {" "}
                <Typography className={classes.contain}>
                  <SwitchForm
                    label={"Garantie"}
                    checked={form.guarantee}
                    onChange={handleChecked}
                    name={"guarantee"}
                  />
                  <TextField
                    className={classes.velo}
                    id="outlined-basic"
                    label="Informations"
                    variant="outlined"
                    name="info_guarantee"
                    form={form.info_guarantee}
                    onChange={handleChange}
                  ></TextField>
                </Typography>
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
              6. ELECTRIQUE
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.contain}>
              <Typography>
                <div className={classes.margin}>
                  <Typography className={classes.contain}>
                    <SwitchForm
                      name={"electric"}
                      checked={form.electric}
                      onChange={handleChecked}
                      label={"Electrique *"}
                    />
                    <div className={classes.margin}>
                      <TextField
                        className={classes.velo}
                        id="outlined-basic"
                        label="Puissance Moteur en Watt"
                        variant="outlined"
                        name="engine_power"
                        form={form.engine_power}
                        onChange={handleChange}
                      ></TextField>
                    </div>
                    <TextField
                      className={classes.velo}
                      id="outlined-basic"
                      label="Voltage Batterie"
                      variant="outlined"
                      name="battery_wolt"
                      form={form.battery_volt}
                      onChange={handleChange}
                    ></TextField>
                  </Typography>
                </div>
              </Typography>
            </div>
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
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClick}
      >
        Soumettre
      </Button>
    </div>
  );
}
