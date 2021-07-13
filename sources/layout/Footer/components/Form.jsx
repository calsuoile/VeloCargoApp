import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const useStyles = makeStyles((theme) => ({
  container: {
  //  backgroundColor: "#FFA1B0",
  //  borderRadius: "30px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    width: "40%",
    backgroundColor: "#B4B8D4",
    "&:hover": {
      background: "#FADF54",
      fontSize: "15px",
    },
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0, 0, 2),
      width: "100%",
    },
  },

  connexion: {
    margin: "20px",
    color: "white",
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
   
  },
  button: {
    display: "flex",
    justifyContent: "center",
   
  },
}));

export default function Form() {
  const classes = useStyles();

  const [userComment, setUserComment] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleTextFieldChange = (e) => {
    setUserComment({ ...userComment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userComment);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5" className={classes.connexion}>
          CONTACTEZ-NOUS
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                autoComplete="firstname"
                name={"firstname"}
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="Prénom"
                autoFocus
                onChange={handleTextFieldChange}
                value={userComment.firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Nom"
                name={"lastname"}
                autoComplete="lname"
                onChange={handleTextFieldChange}
                value={userComment.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name={"email"}
                autoComplete="email"
                onChange={handleTextFieldChange}
                value={userComment.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                id="outlined-textarea"
                required
                label="Commentaires"
                multiline
                variant="outlined"
                onChange={handleTextFieldChange}
                value={userComment.message}
                name={"message"}
                rows={4}
                rowsMax={7}
                fullWidth
              />
            </Grid>
          </Grid>
          <div className={classes.button}>
            <Button
              type="submit"
              onClick={() => setOpen(true)}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ENVOYER
            </Button>
          </div>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Merci de nous avoir contacter !"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Vélo Cargo Trade se fera un plaisir de vous répondre dans les
                plus brefs délais! <InsertEmoticonIcon />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary" autoFocus>
                Retour
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    </Container>
  );
}
