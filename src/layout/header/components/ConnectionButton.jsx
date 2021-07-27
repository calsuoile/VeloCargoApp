import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import { Button } from "@material-ui/core";
import UserContext from "../../../context/user";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  buttonDeco: {
    backgroundColor: "#5C9A9A",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  buttonco: {
    backgroundColor: "#5C9A9A",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    marginRight: "40px",
    "&:hover": {
      backgroundColor: "#F29F24",
    },
  },
  name: {
    fontFamily: "Open Sans Condensed, sans-serif",
    color: "white",
    marginTop: 12,
    marginLeft: 3,
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      marginLeft: 1,
    },
  },
  user: {
    display: "flex",
  },
}));

export default function ConnectionButton() {
  const classes = useStyles();
  const { connectedUser, setConnectedUser } = useContext(UserContext);
  const router = useRouter();

  const handleClick = () => {
    setConnectedUser({});
    localStorage.removeItem("userToken");
    router.push("/");
  };

  return (
    <div className={classes.root}>
      {Object.keys(connectedUser).length > 0 && (
        <div>
          <Link href="/">
            <Button
              className={classes.buttonDeco}
              variant="contained"
              color="secondary"
              onClick={handleClick}
            >
              Déconnexion
            </Button>
          </Link>
          <div className={classes.user}>
            <Link href="/mon-profil">
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </Link>
            <div className={classes.name}>{connectedUser.firstname}</div>
          </div>
        </div>
      )}
      {Object.keys(connectedUser).length === 0 && (
        <Link href="/connexion">
          <Button
            aria-label="connexion"
            variant="contained"
            color="secondary"
            className={classes.buttonco}
          >
            Connexion{" "}
          </Button>
        </Link>
      )}
    </div>
  );
}
