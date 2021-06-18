import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddLocationIcon from "@material-ui/icons/AddLocation";

const useStyles = makeStyles({
  list: {
    width: 350,
    color: "#f4c15b",
  },

  burgerbut: {
    backgroundColor: "white",
    height: "40px",
    width: "30px",
    fontFamily: "Staatliches, cursive",
    textAlign: "center",
    fontWeight: "bold",
    margin: "5px",
    "&:hover": {
      background: "#f4c15b",
    },
  },
  puces: {
    listStyle: "none",
  },
  accueil: {
    border: "none",
    color: "#F2B869",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Staatliches, cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  profil: {
    border: "none",
    color: "#F2B869",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Staatliches, cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },

  ajout: {
    border: "none",
    color: "#F2B869",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Staatliches, cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },

  articles: {
    border: "none",
    color: "#F2B869",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Staatliches, cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  connexion: {
    border: "none",
    color: "#F2B869",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Staatliches, cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  propos: {
    border: "none",
    color: "#F2B869",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Staatliches, cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  contact: {
    border: "none",
    color: "#F2B869",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Staatliches, cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  menuicon: {
    color: "#f4c15b",
    fontSize: "40px",
    marginLeft: "10px",
    marginRight: "10px",
    "&:hover": {
        color: "white",
  },
},
  homeicon: {
    color: "#F2B869",
    fontSize: "30px",
  },
  circle: {
    color: "#F2B869",
    fontSize: "30px",
  },
  plus: {
    color: "#F2B869",
    fontSize: "30px",
  },
  loupe: {
    color: "#F2B869",
    fontSize: "30px",
  },
  cadenas: {
    color: "#F2B869",
    fontSize: "30px",
  },
  inscri: {
    color: "#F2B869",
    fontSize: "30px",
  },
  question: {
    color: "#F2B869",
    fontSize: "30px",
  },
});

export default function BurgerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={classes.menuburgerlist}>
          <ul className={classes.puces}>
            <li>
              <Button className={classes.accueil} to="/">
                <ListItemIcon>
                  <HomeIcon className={classes.homeicon} />
                </ListItemIcon>
                <strong>ACCUEIL</strong>
              </Button>
            </li>
            <li>
              <Button className={classes.profil} to="/profil">
                <ListItemIcon>
                  <AccountCircleIcon className={classes.circle} />
                </ListItemIcon>
                <strong>MON PROFIL</strong>
              </Button>
            </li>
            <li>
              <Button className={classes.ajout} to="/flat">
                <ListItemIcon>
                  <AddLocationIcon className={classes.plus} />
                </ListItemIcon>
                <strong>DEPOSER UNE ANNONCE</strong>
              </Button>
            </li>
            <li></li>
            <li>
              <Button
                className={classes.articles}
                to="/marketplace"
                // component={Link}
              >
                <ListItemIcon>
                  <SearchIcon className={classes.loupe} />
                </ListItemIcon>
                <strong>ARTICLES ET ASTUCES</strong>
              </Button>
            </li>
            <Divider />
            <li>
              <Button
                className={classes.connexion}
                to="/connexion"
                // component={Link}
              >
                <ListItemIcon>
                  <LockOpenIcon className={classes.cadenas} />
                </ListItemIcon>
                <strong>CONNEXION</strong>
              </Button>
            </li>
            <li>
              <Button
                className={classes.propos}
                to="/inscription"
                // component={Link}
              >
                <ListItemIcon>
                  <AddBoxIcon className={classes.inscri} />
                </ListItemIcon>
                <strong>A PROPOS</strong>
              </Button>
            </li>
            <li>
              <Button
                className={classes.contact}
                to="/contact"
                // component={Link}
              >
                <ListItemIcon>
                  <ContactSupportIcon className={classes.question} />
                </ListItemIcon>
                <strong>CONTACTEZ-NOUS</strong>
              </Button>
            </li>
          </ul>
        </div>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className={classes.burgerbut}
          >
            <ListItemIcon>
              <MenuIcon className={classes.menuicon} />
            </ListItemIcon>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
