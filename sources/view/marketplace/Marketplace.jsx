import React from 'react';
import Filter from '/sources/view/marketplace/components/Filter';
import CardAdsList from '/sources/view/home/CardAdsList';
import SortBy from '/sources/view/marketplace/components/SortBy';
import TitleAds from '/sources/view/marketplace/components/TitleAds';
import Page from '/sources/view/marketplace/components/Page';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    Marketplace: {
        display: 'flex',
        justifyContent: "space-evenly",
        marginTop: "50px",
    },
    titlesort: {
        display: 'flex',
        
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

<<<<<<< HEAD

function Marketplace({adsCard}) {
=======
function Marketplace(props) {
>>>>>>> origin/dev
    const classes = useStyles();
    return (
        <div className={classes.Marketplace}>
          <Filter /> 
<<<<<<< HEAD
          <CardAdsList adsCard={adsCard}/> 
=======
          <div className={classes.column}>
          <TitleAds />
          <SortBy />
          <CardAdsList /> 
          <Page />
          </div>
>>>>>>> origin/dev
        </div>
    );
}

export default Marketplace;