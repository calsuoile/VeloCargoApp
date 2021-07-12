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
  nav: {

  },
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5E77EB",
    
  },
  menuButton: {
    // display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    // display: "flex",
    width: "150px",
    marginLeft: "20px",
    marginRight: "20px"
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
    </div>
  );
}
