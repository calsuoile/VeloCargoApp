import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Paper from '@material-ui/core/Paper';
import Upload from "../../../common/components/Upload";


const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: "5vh",
    fontSize: "50px",
  },
  titleInput: {
    "& > *": {
      margin: theme.spacing(5),
      width: "80%",
    },
  },
  text: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "80%",
    },
  },
  inputImage: {
    display: "none",
  },
  uploadImage: {
    "& > *": {
      margin: theme.spacing(5),
    },
  },
  saveButton: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    maxWidth: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    bottom: "0",
    opacity: 0.33,
  },

  container: {
    width: "90%",
    margin: "20px",
    justifySelf: "center",
  },

  littletitle: {
    marginLeft: "15px",
  },
}));

const CreateArticle = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    title: "",
    text: "",
    photo: [],
  });

  const handleTitleChange = (e) => {
    setForm({ ...form, title: e.target.value });
  };

  const handleTextChange = (e) => {
    setForm({ ...form, text: e.target.value });
  };

  const handleSaveArticle = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handlePicture = (imageUrl) => {
    console.log(imageUrl);
    const newImages = [...form.photo, imageUrl];
    setForm({ ...form, photo: newImages });
    console.log(newImages);
  };
  
  return (
    <>
      <Typography variant="h1">
        <div className={classes.title}>Créer un article</div>
      </Typography>
      <Paper
        className={classes.container}
        variant="elevation"
        elevation="3"
        color="primary"
      >
        <Typography variant="h2" className={classes.littletitle}>
          Titre
        </Typography>
        <form className={classes.titleInput} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Titre de l'article"
            variant="outlined"
            value={form.title}
            onChange={handleTitleChange}
          />
        </form>
        <Typography variant="h2" className={classes.littletitle}>
          Contenu
        </Typography>
        <form className={classes.text} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Contenu de l'article"
              multiline
              rows={30}
              variant="outlined"
              value={form.text}
              onChange={handleTextChange}
            />
          </div>
        </form>
        <Typography variant="h2" className={classes.littletitle}>
          Photo
        </Typography>
        <div className={classes.uploadImage}>
          <input
            accept="image/*"
            className={classes.inputImage}
            id="contained-button-file"
            multiple
            type="file"
          />
          <div>
            <label htmlFor="contained-button-file">
              {form.photo.map((image, index) => {
                return <img src={image} alt="" key={index} width="150px" />;
              })}
              <Upload handlePicture={handlePicture} />
            </label>
          </div>
          <div className={classes.saveButton}></div>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSaveArticle}
          >
            Enregistrer
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default CreateArticle;
