import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
    display: "flex",
    justifyContent: "center",
    "& > *": {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
  },
}));

export default function PaginationPage({ total, onChange, page }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={Math.floor(total / 10) + 1}
        color="primary"
        onChange={onChange}
        page={page}
      />
    </div>
  );
}
