import React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import OtherArticlesWindow from "./components/OtherArticlesWindow";
import DeleteButton from "../../../common/DeleteButton";
import Link from "next/link";

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
    margin: "20px",
  },
}));

const ViewArticle = ({ articleView: [articleView], otherArticles }) => {
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
        <Typography variant="h1">{articleView.title}</Typography>
        <DeleteButton />
      </div>
      <div className={classes.authorImage}>
        <Avatar alt="Clément Fouillet" src="/assets/clement_fouillet.jpg" />
        <Typography
          style={{ marginLeft: "10px", marginTop: "10px", fontStyle: "italic" }}
        >
          Le {articleView.created_at} par {articleView.author_id}{" "}
        </Typography>
      </div>
      <div className={classes.container}>
        <Typography variant="body1" className={classes.containerText}>
          {articleView.text}
          <img src={articleView.photo} className={classes.otherImages} />
        </Typography>

        <div className={classes.containerOtherArticles}>
          <Typography variant="h3">Derniers articles</Typography>
          {otherArticles.map((otherArticle) => (
            <Link href={"/articles/" + otherArticle.id} key={otherArticle.id}>
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <OtherArticlesWindow key={otherArticle.id} {...otherArticle} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewArticle;
