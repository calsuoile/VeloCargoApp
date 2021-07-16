import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteButtonAds from "../../../../common/DeleteButtonAds";
import UserContext from "../../../../context/user";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";


const moment = require("moment");
moment.locale("fr");

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  content: {
    backgroundColor: "#fff",
  },
  image: {
    width: 320,
    heigth: 240,
    borderRadius: "20px 20px 0px 0px",
    boxShadow: "2px 4px 4px #BFD9D9",
    

  },
  cityandicon: {
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
    color: "#F23508",
  },
  title: {
    color: "#F27C08",
    fontWeight: "bold",
    fontSize: "20px"
  },
  price: {
    color: "#BFD9D9",
    fontSize: "25px"
  },
  date: {
    color: "black",
    fontSize: "15px"
  },
  city: {
    color: "red",
  }
});

export default function CardAds({ photo, title, price, department, created_at }) {
  const [isFavorite, setIsFavorite] = React.useState(true);
  const { connectedUser } = useContext(UserContext);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleClick = async () => {
    const accessToken = localStorage.getItem("userToken");
    if ((accessToken) && (setIsFavorite(true))) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      await axios.post(
        `https://localhost:3030/users/${props.id}/favorites`,
        {},
        config
      );
    }
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img className={classes.image} src={photo} />
        <CardContent className={classes.content}>
          <Typography variant="h5" component="h1" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h3" className={classes.price}>
            {price}€
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.cityandicon}>
        <Typography variant="body2" color="secondary" className={classes.city}>
          {department}
        </Typography>
        <Typography variant="body1" color="secondary" className={classes.date}>
          {moment(created_at).format("LL à hh:mm")}
        </Typography>
        <div
          color="secondary"
          className={classes.icon}
          onClick={handleClickFavorite}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          {/* <IconButton aria-label="add to favorites" onClick={handleClick}>
            {connectedUser?.favorites?.includes(props._id) && <FavoriteIcon />}
            {!connectedUser?.favorites?.includes(props._id) && (
              <FavoriteBorderIcon />
            )}
          </IconButton> */}
        </div>
        <DeleteButtonAds color="secondary" />
      </div>
    </Card>
  );
}
