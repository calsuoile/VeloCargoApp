import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    list: {
      display: 'flex',
      backgroundColor: "#68db96",
      justifyContent: 'space-around'
    },
    img:{
        width: "20%",
    },
    container:{
        backgroundColor: "#68db96",
    }
}));

function Footer(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
        <div className={classes.list}>
            <div>
                <ul>
                    <li>LES VELOS CARGO</li>
                    <li>Triporteur</li>
                    <li>Biporteur</li>
                    <li>Tricycle</li>
                    <li>LongTrail</li>
                    <li>Remorques</li>
                    <li>Accessoires</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>VENDRE UN VELO</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>ARTICLES</li>
                </ul>
            </div>
            <div className={classes.abonnez}>
            <TextField id="standard-search" label="S'abonner !" type="search" />
            </div>
    </div>

            <div className={classes.logoform}>
            <img className={classes.img} src="/assets/logoVC.png"/>
            </div>
            </div>
    );
}

export default Footer;