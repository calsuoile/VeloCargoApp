import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: "120px",
    marginTop: "80px",
  },


  title: {
    marginTop: "50px",
    color: "#006262",
    fontFamily:"Staatliches, cursive",
    textAlign: "center",
    fontSize: "40px",
},
hr: {
  width: "10%",
  height: "3px",
  backgroundColor:"#006262",
  border:"none",
  marginTop: "30px"
},
  img: {
    width: "27%",
    borderRadius: "10%",
    cursor:"pointer",
    "&:hover": {
      width: "28%",
     
    }
  }
}));
function CreateAds(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} variant="h5">
        Que souhaitez vous vendre ?{" "}
      </Typography>
      <hr className={classes.hr}></hr>
      <div className={classes.buttons}>
        <Link href="vendre-un-velo-cargo">
        <img className={classes.img} src="/assets/velo.png" />
          {/* <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Vendre un Velo
          </Button> */}
        </Link>
        <Link href="vendre-un-accessoire">
        <img className={classes.img} src="/assets/access.png" />
        {/* <Button className={classes.button} variant="contained" color="primary">
          Vendre un Accessoire
        </Button> */}
        </Link>
        <Link href="vendre-une-remorque">
        <img className={classes.img} src="/assets/remorque.png" />
        {/* <Button className={classes.button} variant="contained" color="primary">
          Vendre une Remorque
        </Button> */}
        </Link>
       
      </div>
    </div>
  );
}

export default CreateAds;
