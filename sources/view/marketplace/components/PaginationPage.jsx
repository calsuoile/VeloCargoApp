import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
    display: 'flex',
    justifyContent: "center",
    '& > *': {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
  },
}));

export default function PaginationPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={10} color="primary" />
     
    </div>
  );
}