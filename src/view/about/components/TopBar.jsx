import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
    toolbarTitle: {
    flex: 1,
    marginTop: "50px",
    color: "#006262",
    textAlign: "center",
    marginBottom: "20px",
    fontFamily:"Staatliches, cursive",

  },
    toolbarSecondary: {
    justifyContent: "space-between",
    fontSize: "20px",
    fontFamily:"Open Sans Condensed, sans-serif",
    marginTop: "10px",
    color: "black",
    
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: "none", 
    color: "red",
  },
}));

export default function TopBar(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

TopBar.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
