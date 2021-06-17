import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: "#f4c15b"
    },
  },
}));

export default function CreateAdsButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        DÉPOSER UNE ANNONCE
      </Button>
    </div>
  );
}