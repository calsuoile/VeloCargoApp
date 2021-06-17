import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        VéloCargo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    width: '100%',
    height: '100vh',
    backgroundColor: "#EDA274",

  },
  contain: {
      opacity: 0.5,
      
    '&:hover': {
    //     background: "rgb(104,219,150)",
    //   background: "radial-gradient(circle, rgba(104,219,150,1) 0%, rgba(255,209,150,0.6713060224089635) 100%)",
        zIndex: 1,
        opacity: 1,
      },
  },
  paper: {
    margin: theme.spacing(8, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper2: {
    margin: theme.spacing(8, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(237, 162, 116, 1)",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  name: {
      display: 'flex',
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.contain}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DirectionsBikeIcon />
          </Avatar>
          <Typography variant="h5">
            CONNEXION
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Mot de passe"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Connexion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Créer un compte"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.contain}>
        <div className={classes.paper2}>
          <Avatar className={classes.avatar}>
            <DirectionsBikeIcon />
          </Avatar>
          <Typography variant="h5">
            INSCRIPTION
          </Typography>
          <form className={classes.form} noValidate>
          <div className={classes.name}>
         
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Nom"
              label="Nom"
              type="name"
              id="name"
              autoComplete="current-password"
              />
                 <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Prenom"
              label="Prenom"
              type="name"
              id="name"
              autoComplete="current-password"
              />
              </div>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Mot de passe"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Mot de passe"
              label="Confirme ton mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Connexion
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </div>
  );
}