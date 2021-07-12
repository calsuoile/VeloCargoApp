import React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import OtherArticlesWindow from "./components/OtherArticlesWindow";
import DeleteButtonAds from "../../../common/DeleteButtonAds";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    maxHeight: 600,
  },

  otherImages: {
    maxWidth: "50%",
    borderRadius: "4px",
    margin: "20px",
  },
  container: {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  containerText: {
    // border: "1px solid black",
    width: "65%",
    marginLeft: "20px",
    marginTop: "20px",
    textAlign: "justify",
    lineHeight: "2em",
  },

  containerOtherArticles: {
    // border: `1px solid ${colors.grey[200]}`,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
    margin: "20px",
  },
  authorImage: {
    display: "flex",
    marginLeft: "30px",
  },
  title: {
    display: "flex",
    margin : "20px"
  },
}));

const ViewArticle = ({ articleView, otherArticles }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <img
          src={articleView.photo}
          alt={articleView.title}
          className={classes.image}
        />
      </div>
      <div className={classes.title}>
        <Typography variant="h1" >
          {articleView.title}
        </Typography>
        <DeleteButtonAds />
      </div>
      <div className={classes.authorImage}>
        <Avatar alt="Clément Fouillet" src="/assets/clement_fouillet.jpg" />
        <Typography
          style={{ marginLeft: "10px", marginTop: "10px", fontStyle: "italic" }}
        >
          Le {articleView.date} par {articleView.author}{" "}
        </Typography>
      </div>
      <div className={classes.container}>
        <Typography variant="body1" className={classes.containerText}>
          {articleView.text}
          <img src={articleView.photo2} className={classes.otherImages} />
        </Typography>

        <div className={classes.containerOtherArticles}>
          <Typography variant="h6">Derniers articles</Typography>
          {otherArticles.map((otherArticle) => (
            <OtherArticlesWindow key={otherArticle.id} {...otherArticle} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewArticle;
