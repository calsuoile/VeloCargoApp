import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "50px",
    marginTop: "50px",
  },
  button: {
    marginBottom: "50px",
  },

  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
}));
function CreateAds(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} variant="h5">
        Que souhaitez vous vendre ?{" "}
      </Typography>
      <div className={classes.buttons}>
        <Link href="velos-cargo">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Vendre un Velo
          </Button>
        </Link>
        <Button className={classes.button} variant="contained" color="primary">
          Vendre un Accessoire
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          {" "}
          Vendre une Remorque
        </Button>
      </div>
    </div>
  );
}

export default CreateAds;
