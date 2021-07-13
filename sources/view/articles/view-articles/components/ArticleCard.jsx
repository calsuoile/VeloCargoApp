import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DeleteButtonAds from "../../../../common/DeleteButtonAds";

const moment = require("moment");
moment.locale("fr");

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: 345,
    maxHeight: 500,
    margin: "10px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  image: {
    width: "100%",
    height: 300,
  },
  deleteButton: {
    justifyContent: "flex-end"
  }
}));

export default function ArticleCard({ photo, title, created_at }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardActionArea>
        <img className={classes.image} src={photo} />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {moment(created_at).format("LL à hh:mm")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <DeleteButtonAds className={classes.deleteButton}/>
    </Card>
  );
}
