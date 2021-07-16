import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ArticleCard from "../articles/view-articles/components/ArticleCard";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginLeft: "85%",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "15px",
    color: "white",
    "&:hover": {
      backgroundColor: " #F29F24 ",
    },
    [theme.breakpoints.down("sm")]: {
      width:"20px",
      fontSize : "10px",
      marginLeft : "80%"
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
    marginBottom: "20px",
    color: "#006969",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize : "30px"
       },
  },

  cards: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    color: "#B4B8D4",
  },
}));

const ListArticlesHomePage = ({ articles }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h3">
        ARTICLES & ASTUCES
      </Typography>
      <div className={classes.cards}>
        {/* map pour affichage de tous les éléments de l'objet articles */}
        {articles?.map((article) => (
          <Link href={"/articles/" + article.id} key={article.id}>
            <a style={{ textDecoration: "none", color: "inherit" }}>
              <ArticleCard key={article.id} {...article} />
            </a>
          </Link>
        ))}
      </div>
      <div>
        <Link href="articles" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Voir Plus
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ListArticlesHomePage;
