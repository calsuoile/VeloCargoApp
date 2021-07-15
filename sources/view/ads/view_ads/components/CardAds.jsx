import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteButtonAds from "../../../../common/DeleteButtonAds";

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
  cityandicon: {
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
  },
  title: {
    color: "#006969",
  },
  price: {
    color: "#B4B8D4",
  },
});

export default function CardAds({ photo, title, price, city }) {
  const [isFavorite, setIsFavorite] = React.useState(true);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img className={classes.image} src={photo} />
        <CardContent className={classes.content}>
          <Typography variant="h6" component="h1" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h6" className={classes.price}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.cityandicon}>
        <Typography variant="body2" color="secondary" className={classes.city}>
          {city}
        </Typography>
        <div
          color="secondary"
          className={classes.icon}
          onClick={handleClickFavorite}
        >
          {isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </div>
        <DeleteButtonAds color="secondary" />
      </div>
    </Card>
  );
}
