import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: "20px",
        display: 'flex',
        justifyContent: 'center',
    }
}));

function Title(props) {
    const classes = useStyles();
    return (
        <div>
          <Typography className={classes.title} variant="h5">
          ACHETER UN VELO CARGO
          </Typography>
        </div>
    );
}

export default Title;