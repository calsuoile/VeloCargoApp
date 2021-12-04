import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectBike from "./components/SelectBike";
import ConnectionButton from "./components/ConnectionButton";
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
    display: "flex",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(/assets/backg.png)",
  },
  logo: {
    width: "150px",
    marginLeft: "40px",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      width: 160,
      display: "flex",
      marginLeft: "10px",
      marginRight: "0px",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const { connectedUser } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <BurgerMenu className={classes.menuButton} />
      </Hidden>
      <Link href="/">
        <a>
          <img className={classes.logo} src="/assets/CargoBikeTrade.png" />
        </a>
      </Link>
      <Hidden smDown>
        <SelectBike />
        <ArticlesTipsButton />
      </Hidden>
      <div style={{ flexGrow: 1 }}></div>
      <Hidden smDown>
        {connectedUser?.id && connectedUser?.role === "admin" && (
          <CreateArticleButton />
        )}
        <CreateAdsButton />
        <AboutButton />
      </Hidden>
      <ConnectionButton />
    </div>
  );
}
