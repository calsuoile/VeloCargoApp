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

const useStyles = makeStyles((theme) => ({
  ok: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
  },
  dialog: {
    backgroundColor: "#F29F24",
    fontFamily: "Staatliches, cursive",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    width: "40%",
    backgroundColor: "#5C9A9A",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    "&:hover": {
      background: "#F29F24",
    },
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0, 0, 2),
      width: "100%",
    },
  },
  contact: {
    margin: "20px",
    color: "white",
    textAlign: "center",
    fontWeight: 500,
    fontSize: "30px",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
  hr: {
    width: "50%",
    marginTop: "8%",
    marginBottom: "10%",
  },
  alert: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "15px",
    marginTop: "20px",
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
        <Typography className={classes.contact}>
          <strong>CONTACTEZ-NOUS</strong>
        </Typography>
        <hr className={classes.hr}></hr>
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
            <DialogTitle id="alert-dialog-title" className={classes.dialog}>
              {"MERCI POUR VOTRE MESSAGE !"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                className={classes.alert}
              >
                Vélo Cargo Trade se fera un plaisir de vous répondre dans les
                plus brefs délais!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                className={classes.ok}
                onClick={() => setOpen(false)}
                color="primary"
                autoFocus
              >
                <strong>Ok</strong>
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    </Container>
  );
}
