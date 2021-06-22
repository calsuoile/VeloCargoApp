import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ArticlesTipsButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="articles">
      <Button variant="contained" color="primary">
        ARTICLES & ASTUCES
      </Button>
      </Link>
    </div>
  );
}