import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import Link from "next/link";

const useStyles = makeStyles({
  list: {
    width: 350,
    color: "#f4c15b",
  },

  burgerbut: {
    backgroundColor: "#5C9A9A",
    width: "30px",
    fontFamily: "Staatliches, cursive",
    textAlign: "center",
    fontWeight: "bold",
    margin: "5px",
    marginLeft: "50%",
    "&:hover": {
      background: "#F29F24",
    },
  },
  puces: {
    listStyle: "none",
    marginLeft: "5%"
  },
  accueil: {
    border: "none",
    color: "#5C9A9A",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "18px",
    "&:hover": {
      fontSize: "19px",
    },
  },
  profil: {
    border: "none",
    color: "#5C9A9A",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "18px",
    "&:hover": {
      fontSize: "19px",
    },
  },

  ajout: {
    border: "none",
    color: "#5C9A9A",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "18px",
    "&:hover": {
      fontSize: "19px",
    },
  },

  articles: {
    border: "none",
    color: "#5C9A9A",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "18px",
    "&:hover": {
      fontSize: "19px",
    },
  },

  connexion: {
    border: "none",
    color: "#5C9A9A",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "18px",
    "&:hover": {
      fontSize: "19px",
    },
  },

  propos: {
    border: "none",
    color: "#5C9A9A",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "18px",
    "&:hover": {
      fontSize: "19px",
    },
  },

  contact: {
    border: "none",
    color: "#5C9A9A",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "18px",
    "&:hover": {
      fontSize: "19px",
    },
  },

  menuicon: {
    color: "white",
    fontSize: "40px",
    marginLeft: "10px",
    marginRight: "10px",
    "&:hover": {
      // color: "#5C9A9A",
    },
  },
  homeicon: {
    color: "#F29F24",
    fontSize: "32px",
  },
  circle: {
    color: "#F29F24",
    fontSize: "32px",
  },
  plus: {
    color: "#F29F24",
    fontSize: "32px",
  },
  article: {
    color: "#F29F24",
    fontSize: "32px",
  },
  loupe: {
    color: "#F29F24",
    fontSize: "32px",
  },
  cadenas: {
    color: "#F29F24",
    fontSize: "32px",
  },
  inscri: {
    color: "#F29F24",
    fontSize: "32px",
  },
  question: {
    color: "#F29F24",
    fontSize: "32px",
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
              <Link href="/accueil" style={{ textDecoration: "none" }}>
                <Button className={classes.accueil}>
                  <ListItemIcon>
                    <HomeIcon className={classes.homeicon} />
                  </ListItemIcon>
                 ACCUEIL
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/creer-un-article" style={{ textDecoration: "none" }}>
                <Button className={classes.ajout}>
                  <ListItemIcon>
                    <AssignmentIcon className={classes.article} />
                  </ListItemIcon>
                  <strong>CREER UN ARTICLE</strong>
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/mon-profil" style={{ textDecoration: "none" }}>
                <Button className={classes.profil}>
                  <ListItemIcon>
                    <AccountCircleIcon className={classes.circle} />
                  </ListItemIcon>
                  <strong>MON PROFIL</strong>
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/vendre-un-produit" style={{ textDecoration: "none" }}>
                <Button className={classes.ajout}>
                  <ListItemIcon>
                    <AddLocationIcon className={classes.plus} />
                  </ListItemIcon>
                  <strong>DEPOSER UNE ANNONCE</strong>
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href="/acheter-un-velo-cargo"
                style={{ textDecoration: "none" }}
              >
                <Button className={classes.connexion}>
                  <ListItemIcon>
                    <DirectionsBikeIcon className={classes.cadenas} />
                  </ListItemIcon>
                  <strong>ANNONCES</strong>
                </Button>
              </Link>
            </li>
            
            <li>
              <Link href="/articles" style={{ textDecoration: "none" }}>
                <Button className={classes.articles}>
                  <ListItemIcon>
                    <SearchIcon className={classes.loupe} />
                  </ListItemIcon>
                  <strong>ARTICLES ET ASTUCES</strong>
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/a-propos" style={{ textDecoration: "none" }}>
                <Button className={classes.propos}>
                  <ListItemIcon>
                    <AddBoxIcon className={classes.inscri} />
                  </ListItemIcon>
                  <strong>A PROPOS</strong>
                </Button>
              </Link>
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
