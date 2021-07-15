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
  favorite: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    backgroundColor: "#5C9A9A",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      width:"20px",
      fontSize : "10px"
    },
  },
  icon: {
    fontSize: "25px",
    color: "white",
  },
}));

export default function ConnectionButton() {
  const classes = useStyles();
  const {connectedUser, setConnectedUser} = useContext(UserContext);
  const router= useRouter();

  const handleClick = () => {
    setConnectedUser({});
    localStorage.removeItem("userToken");
    router.push("/");
  };

  return (
    <div className={classes.root}>
      {Object.keys(connectedUser).length > 0 && (
        <div className={classes.user}>
          <div className={classes.name}>{connectedUser.firstName}</div>
          <Link href="/">
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={handleClick}
            >
              Déconnexion
            </Button>
          </Link>
          <Link href="mon-profil">
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Link>
        </div>
      )}
      {Object.keys(connectedUser).length === 0 && (
        <Link href="connexion">
          <Button aria-label="connexion" variant="contained" color="secondary" className={classes.button}>
            Connexion{" "}
          </Button>
        </Link>
      )}
    </div>
  );
}
