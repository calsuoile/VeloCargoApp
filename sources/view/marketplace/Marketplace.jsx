import React from 'react';
import Filter from '/sources/view/marketplace/components/Filter';
import CardAdsList from '/sources/view/home/CardAdsList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    Marketplace: {
        display: 'flex',
        marginTop: "50px",
    }
}));


function Marketplace({adsCard}) {
    const classes = useStyles();
    return (
        <div className={classes.Marketplace}>
          <Filter /> 
          <CardAdsList adsCard={adsCard}/> 
        </div>
    );
}

export default Marketplace;