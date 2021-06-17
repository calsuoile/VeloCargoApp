import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SelectCategory from '/sources/view/marketplace/components/SelectCategory';
import Slide from '/sources/view/marketplace/components/Slide';
import InputCity from '/sources/view/marketplace/components/InputCity';
import CheckBox from '/sources/view/marketplace/components/CheckBox';
import StateGeneral from '/sources/view/marketplace/components/StateGeneral';
import Brand from '/sources/view/marketplace/components/Brand';

const useStyles = makeStyles((theme) => ({
    filter: {
        margin: "30px",
        // backgroundColor: "#FFF2C7",
    }
 }));

function Filter(props) {
    const classes = useStyles();
    return (
        <div className={classes.filter}>
            <h1>FILTRES</h1>
            <SelectCategory />
            <InputCity />
            <Slide />
            <CheckBox />
            <StateGeneral />
            <Brand />
        </div>
    );
}

export default Filter;