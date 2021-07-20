import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { TextField } from "@material-ui/core";
import CountrySelector from "../../../../common/components/CountrySelector";
import Button from "@material-ui/core/Button";
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
  intro: {
    display: "flex",
    flexDirection: "column",
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
  description: {
    width: 600,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "100%",
    },
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
    // margin: 25,
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
  typo: {
    width: "100%",
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
    price: "",
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
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}accessories`,
        { ...form, type: "accessoire", photo: form.photo.toString() },
        config
      )
      .then(() => {
        router.push("/");
      });
  };
  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h5" className={classes.title1}>
          DEPOSER UNE ANNONCE
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
              <div className={classes.typo}>
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
                    className={classes.country}
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
                    <FormLabel component="legend">Catégories : </FormLabel>
                    <RadioGroup aria-label="category">
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
    </div>
  );
}

export default AdsAccessorie;
