import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 600,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${
      theme.spacing.unit + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
});

function ButtonBases(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key="Acheter un vélo cargo"
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "50%",
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: "url('/assets/cargo3.jpg')",
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Link href="acheter-un-velo-cargo" style={{ textDecoration: "none" }}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              ACHETER UN VELO CARGO
              <span className={classes.imageMarked} />
            </Typography>
          </Link>
        </span>
      </ButtonBase>

      <ButtonBase
        focusRipple
        key="Vendre un vélo cargo"
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "50%",
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: "url('/assets/cargo1.jpg')",
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Link href="vendre-un-produit" style={{ textDecoration: "none" }}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              VENDRE UN VELO CARGO
              <span className={classes.imageMarked} />
            </Typography>
          </Link>
        </span>
      </ButtonBase>
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);
