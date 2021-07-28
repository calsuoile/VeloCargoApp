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
import axios from "axios";
import { toast } from "react-toastify";

const moment = require("moment");
moment.locale("fr");

const useStyles = makeStyles({
  root: {
    width: 300,
    heigth: 450,
    margin: 30,
  },
  content: {
    backgroundColor: "#fff",
    height: 80,
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    width: "600px",
    maxWidth: "100%",
    // height: "auto",
    maxHeight: 230,
    // maxWidth: 350,
    // minWidth: 270,
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    // borderRadius: "20px 20px 0px 0px",
    // boxShadow: "2px 4px 4px #BFD9D9",
  },
  cityandicon: {
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "5px",
    paddingBottom: "20px",
    color: "#F23508",
  },
  title: {
    color: "#F27C08",
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: 6,
  },
  price: {
    color: "#BFD9D9",
    fontSize: "25px",
    marginBottom: 6,
  },
  date: {
    color: "black",
    fontSize: "15px",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginLeft: 12,
    flexDirection: "flex-end"
  },
});

export default function CardAds({
  photo,
  title,
  price,
  department,
  created_at,
  ads_id,
  user_id,
}) {
  const { connectedUser } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = React.useState(
    connectedUser?.favorites?.includes(ads_id)
  );

  const handleClickFavorite = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const accessToken = localStorage.getItem("userToken");
    if (accessToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      if (isFavorite) {
        // if it's favorite it means you should remove it
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}ads/${ads_id}/favorites`,
          config
        );
        toast.info("Annonce retirée des favoris");
      } else {
        // if not then we should add it
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}ads/${ads_id}/favorites`,
          {},
          config
        );
        toast.success("Annonce ajoutée aux favoris");
      }
      setIsFavorite(!isFavorite);
    }
  };

  const classes = useStyles();
  const photos = photo?.split(",");
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div className={classes.contain}>
        <img
          className={classes.image}
          src={
            photo && photos.length > 0
              ? photos[0]
              : "/assets/no-img-cargobike.jpeg"
          } 
        />
        </div>
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
          {moment(created_at).format("LL à HH:mm")}
        </Typography>
        <div
          color="secondary"
          className={classes.icon}
          onClick={handleClickFavorite}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
        {user_id === connectedUser?.id && (
          <DeleteButtonAds color="secondary" adsId={ads_id} />
        )}
      </div>
    </Card>
  );
}
