import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SplitButtonType from "./components/SplitButtonType";
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
    flexGrow: 1,
    display: "flex",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(/assets/backg.png)",
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
    marginRight: "20px",
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
      <Link href="/accueil">
        <a>
          <img className={classes.logo} src="/assets/CargoBikeTrade.png" />
        </a>
      </Link>
      <Hidden mdUp>
        <BurgerMenu className={classes.menuButton} />
      </Hidden>
      <Hidden smDown>
        <SelectBike />
        {/* <SplitButtonType /> */}
        <ArticlesTipsButton />
      </Hidden>
      <div style={{ flexGrow: 1 }}></div>
      <Hidden smDown>
        <CreateArticleButton />
        <CreateAdsButton />
        <AboutButton />
      </Hidden>
      <ConnectionButton />
    </div>
  );
}
