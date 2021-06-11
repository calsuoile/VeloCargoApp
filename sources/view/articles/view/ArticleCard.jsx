import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: 345,
    margin: "10px",
    borderRadius: "5px",
  },
  media: {
    height: 140,
  },
  image: {
    width: "100%",
    height:300,
  },

  test: {
    alignItems: "flex-end",
  },
}));

export default function ArticleCard({ title, avatar, date }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardActionArea>
        <img className={classes.image} src={avatar} />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Partager
        </Button>
        <Button size="small" color="primary">
          Lire
        </Button>
      </CardActions>
    </Card>
  );
}
