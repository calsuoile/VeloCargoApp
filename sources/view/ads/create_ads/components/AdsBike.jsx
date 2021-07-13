import React, { useState } from "react";
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
import SwitchForm from "../../../../common/components/SwitchForm";
import RadioButtonsGroup from "../../../../common/RadioButtonsGroup";
import { useRouter } from "next/router";
import axios from "axios";
import Upload from "../../../../common/components/Upload";

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
          </div>
          <div className={classes.contain}>
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
                  name="battery_volt"
                  form={form.battery_wolt}
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
  );
}
