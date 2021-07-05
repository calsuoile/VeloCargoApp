import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 400,
    borderRadius: "5px",
    margin: "10px",
    backgroundColor: "#fff",
  },
  media: {
    height: 140,
  },

  content: {
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 250,
  },
  // city: {
  //   paddingLeft: "12px",
  // },

  cityandicon: {
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

export default function CardAds({ photo, title, price, city }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img className={classes.image} src={photo} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="body2" component="h2">
            {title}
          </Typography>
          
          <Typography variant="h6" color="textSecondary" component="p">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <div className={classes.cityandicon}>
        <Typography variant="body2" color="secondary" className={classes.city}>
          {city}
        </Typography>
        <IconButton color="secondary" className={classes.icon}>
          {" "}
          <FavoriteIcon />{" "}
        </IconButton>
      </div>
    </Card>
  );
}
