import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DatePickers from "../../../common/components/DatePickers";
import { TextField } from "@material-ui/core";
import CheckBox from "./components/CheckBox";
import CountrySelector from "../../../common/components/CountrySelector";
import Button from "@material-ui/core/Button";
import SwitchForm from "../../../common/components/SwitchForm";
import RadioButtonsGroup from "../../../common/RadioButtonsGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    marginLeft : "50px"
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

export default function CreateAds({ match }) {
  const classes = useStyles();
  const [form, setForm] = React.useState({
    title: "",
    date: "",
    description: "",
    country: "",
    department: "",
    category: "",
    brand: "",
    model: "",
    price: "",
    frameSize: "",
    build_year: "",
    bicycode: "",
    kms: "",
    length: "",
    volumeBox: "",
    general_state: "",
    mecanic_state: "",
    esthetic_state: "",
    info_guarantee: "",
    guarantee: false,
    electric: false,
    engin_power: "",
    batterie_wolt: "",
  });

  // useEffect(() => {
  //   if (match?.params?.id) {
  //     axios
  //       // .get(` https://toctoc-api.herokuapp.com/flat/${match.params.id} `)
  //       .then((response) => setForm(response.data));
  //   }
  // }, [match.params.id]);

  // const postForm = () => {
  //   const token = localStorage.getItem("userToken");
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };
  //   if (match?.params?.id) {
  //     axios
  //       .patch(
  //         // `https://toctoc-api.herokuapp.com/flat/${match.params.id}`,
  //         form,
  //         config
  //       )
  //       .then(() => {
  //         history.push("/");
  //       });
  //   } else {
  //     axios
  //       // .post("https://toctoc-api.herokuapp.com/flat", form, config)
  //       .then((res) => {
  //         console.log(res.data);
  //         history.push("/");
  //       });
  //   }
  // };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleChecked = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };
  const handleClick = () => {
    console.log(form); //postForm();
  };

  const handleUploadImage = (imageUrl) => {
    const newImages = [...form.images, imageUrl];
    setForm({ ...form, images: newImages });
    console.log(newImages);
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
                name="titre"
                form={form.title}
                onChange={handleChange}
              ></TextField>
              <DatePickers
                value={form.date}
                className={classes.date}
                name={"date"}
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
                name="departement"
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
                value={form.category}
                onChange={handleChange}
                name={"category"}
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
                  label="Taille du Cadre"
                  variant="outlined"
                  name="frameSize"
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
                  name="buildYear"
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
                  label="Longueur"
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
                  label="Volume Caisse"
                  variant="outlined"
                  name="volumeBox"
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
                  name="genralState"
                  form={form.generalState}
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
                  name="mecanicState"
                  form={form.mecanicState}
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
                  name="estheticState"
                  form={form.estheticState}
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
                  name="infoGuarantee"
                  form={form.infoGuarantee}
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
                    required={true}
                    id="outlined-basic"
                    label="Puissance Moteur"
                    variant="outlined"
                    name="enginPower"
                    form={form.engin_power}
                    onChange={handleChange}
                  ></TextField>
                </div>
                <TextField
                  className={classes.velo}
                  required={true}
                  id="outlined-basic"
                  label="Voltage Batterie"
                  variant="outlined"
                  name="batterieWolt"
                  form={form.batterie_wolt}
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
              <Typography className={classes.contain}></Typography>
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
