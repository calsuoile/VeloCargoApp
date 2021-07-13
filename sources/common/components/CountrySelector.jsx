import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    backgroundColor: "white",
    borderRadius: "5px",

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function CountrySelector({ name, value, onChange }) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">PAYS</InputLabel>
        <Select
          required={true}
          native
          value={value}
          name={name}
          onChange={onChange}
          label="Pays"
          inputProps={{
            name: "country",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value="FRA">FRANCE</option>
          <option value="DEU">ALLEMAGNE</option>
          <option value="AUT">AUTRICHE</option>
          <option value="BEL">BELGIQUE</option>
          <option value="BGR">BULGARIE</option>
          <option value="CYP">CHYPRE</option>
          <option value="HRV">CROATIE</option>
          <option value="DNK">DANEMARK</option>
          <option value="ESP">ESPAGNE</option>
          <option value="EST">ESTONIE</option>
          <option value="FIN">FINLANDE</option>
          <option value="GRC">GRÈCE</option>
          <option value="HUN">HONGRIE</option>
          <option value="IRL">IRELANDE</option>
          <option value="ITA">ITALIE</option>
          <option value="LVA">LETTONIE</option>
          <option value="LTU">LITUANIE</option>
          <option value="LUX">LUXEMBOURG</option>
          <option value="MLT">MALTE</option>
          <option value="NLD">PAYS-BAS</option>
          <option value="PL">POLOGNE</option>
          <option value="PT">PORTUGAL</option>
          <option value="RPT">RÉPUBLIQUE TCHÈQUE</option>
          <option value="RO">ROUMANIE</option>
          <option value="SVK">SLOVAQUIE</option>
          <option value="SVN">SLOVÉNIE</option>
          <option value="SWE">SUÈDE</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default CountrySelector;
