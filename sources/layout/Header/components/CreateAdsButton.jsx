import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CreateAdsButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="vendre-un-velo-cargo" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary">DÉPOSER UNE ANNONCE</Button>
      </Link>
    </div>
  );
}
