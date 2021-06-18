import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
    borderRadius: "10px",
    margin: "2px",
  },
}));

const OtherArticlesWindow = ({ title, photo, author, date }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={title} src={photo} />
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textPrimary"
                    style={{ fontSize: 10 }}
                  >
                    <i>{`Rédigé le ${date} par ${author}`}</i>
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default OtherArticlesWindow;
