import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import SplitButtonType from "./components/SplitButtonType";
import IconsHeader from "./components/IconsHeader";
import ArticlesTipsButton from "./components/ArticlesTipsButton";
import CreateAdsButton from "./components/CreateAdsButton";
import AboutButton from "./components/AboutButton";
import { Hidden, Link } from "@material-ui/core";
import BurgerMenu from "./components/BurgerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    display: "flex",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.dark, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    display: "flex",
  },
  inputInput: {
    display: "flex",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "0ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  img: {
    display: "flex",
    width: "80px",
    height: "63px",
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Link href="accueil">
            <img className={classes.img} src="/assets/logo.jpg" />
          </Link>
          <Hidden mdUp>
            <BurgerMenu className={classes.menuButton} />
          </Hidden>
          <Hidden smDown>
            <SplitButtonType />
          </Hidden>
          <Hidden smDown>
            <ArticlesTipsButton />
          </Hidden>
          <div style={{ flexGrow: 1 }}></div>
          <Hidden smDown>
            <CreateAdsButton />
          </Hidden>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Rechercher…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Hidden smDown>
            <AboutButton />
          </Hidden>
          <IconsHeader />
        </Toolbar>
      </AppBar>
    </div>
  );
}
