import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: "5vh",
  },
  titleInput: {
    "& > *": {
      margin: theme.spacing(5),
      width: "50%",
    },
  },
  text: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "50%",
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
}));

const CreateArticle = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    title: "",
    text: "",
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

  return (
    <>
      <Typography variant="h2">
        <div className={classes.title}>Créer un article</div>
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
            <Button variant="outlined" color="primary" component="span">
              Insérer une image
              <AddAPhotoIcon style={{ marginLeft: "5px" }} />
            </Button>
          </label>
        </div>
        <div className={classes.saveButton}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSaveArticle}
          >
            Enregistrer
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateArticle;
