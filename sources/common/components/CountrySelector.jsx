import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

function CountrySelector({name}) {
    const classes = useStyles();
    const [state, setState] = React.useState({name : ''})
   

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">PAYS</InputLabel>
        <Select
        required={true}
          native
          value={state.country}
          onChange={handleChange}
          label="Pays"
          inputProps={{
            name: "country",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option >FRANCE</option>
          <option >ALLEMAGNE</option>
          <option >AUTRICHE</option>
          <option >BELGIQUE</option>
          <option >BULGARIE</option>
          <option >CHYPRE</option>
          <option >CROATIE</option>
          <option >DANEMARK</option>
          <option >ESPAGNE</option>
          <option >ESTONIE</option>
          <option >FINLANDE</option>
          <option >GRÈCE</option>
          <option >HONGRIE</option>
          <option >IRELANDE</option>
          <option >ITALIE</option>
          <option >LETTONIE</option>
          <option >LITUANIE</option>
          <option >LUXEMBOURG</option>
          <option >MALTE</option>
          <option >PAYS-BAS</option>
          <option >POLOGNE</option>
          <option >PORTUGAL</option>
          <option >RÉPUBLIQUE TCHÈQUE</option>
          <option >ROUMANIE</option>
          <option >SLOVAQUIE</option>
          <option >SLOVÉNIE</option>
          <option>SUÈDE</option>

        </Select>
      </FormControl>
    </div>
  );
}

export default CountrySelector;
