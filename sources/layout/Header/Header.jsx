import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import SplitButtonType from "./components/SplitButtonType";
import IconsHeader from "./components/IconsHeader";
import ArticlesTipsButton from "./components/ArticlesTipsButton";
import CreateAdsButton from "./components/CreateAdsButton";
import AboutButton from "./components/AboutButton";
import { Hidden } from "@material-ui/core";
import BurgerMenu from "./components/BurgerMenu";
import CreateArticleButton from "./components/CreateArticleButton";
import Link from "next/link";
import UserContext from "../../context/user";

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
  logo: {
    display: "flex",
    width: "130px",
    height: "80%",
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();
  const { connectedUser } = useContext(UserContext);

  if (connectedUser?.id && connectedUser.role === "admin") {
    return <CreateArticleButton />;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Link href="accueil">
            <img className={classes.logo} src="/assets/CargoBikeTrade.png" />
          </Link>
          <Hidden mdUp>
            <BurgerMenu className={classes.menuButton} />
          </Hidden>
          <Hidden smDown>
            <SplitButtonType />
            <ArticlesTipsButton />
          </Hidden>
          <div style={{ flexGrow: 1 }}></div>
          <Hidden smDown>
            <CreateArticleButton />
            <CreateAdsButton />
            <AboutButton />
          </Hidden>
          <IconsHeader />
        </Toolbar>
      </AppBar>
    </div>
  );
}
