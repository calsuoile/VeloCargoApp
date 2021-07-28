import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // marginBottom: theme.spacing(1),
    width: "200px",
    backgroundColor: "white",
    borderRadius: "5px",
    margin: "10px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function DepartmentSelector({ name, value, onChange }) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Département
        </InputLabel>
        <Select
          required={true}
          native
          value={value}
          name={name}
          onChange={onChange}
          label="Département"
          inputProps={{
            name: "department",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value="Ain">01 - Ain</option>
          <option value="Aisne">02 - Aisne</option>
          <option value="Allier">03 - Allier</option>
          <option value="Alpes-de-Haute-Provence">
            04 - Alpes-de-Haute-Provence
          </option>
          <option value="Hautes-Alpes">05 - Hautes-Alpes</option>
          <option value="Alpes-Maritimes">06 - Alpes-Maritimes</option>
          <option value="Ardèche">07 - Ardèche</option>
          <option value="Ardennes">08 - Ardennes</option>
          <option value="Ariège">09 - Ariège</option>
          <option value="Aube">10 - Aube</option>
          <option value="Aude">11 - Aude</option>
          <option value="Aveyron">12 - Aveyron</option>
          <option value="Bouches-du-Rhône">13 - Bouches-du-Rhône</option>
          <option value="Calvados">14 - Calvados</option>
          <option value="Cantal">15 - Cantal</option>
          <option value="Charente">16 - Charente</option>
          <option value="Charente-Maritime">17 - Charente-Maritime</option>
          <option value="Cher">18 - Cher</option>
          <option value="Corrèze">19 - Corrèze</option>
          <option value="Corse-du-Sud">2A - Corse-du-Sud</option>
          <option value="Haute-Corse">2B - Haute-Corse</option>
          <option value="Côte-d'Or">21 - Côte-d'Or</option>
          <option value="Côtes-d'Armor">22 - Côtes-d'Armor</option>
          <option value="Creuse">23 - Creuse</option>
          <option value="Dordogne">24 - Dordogne</option>
          <option value="Doubs">25 - Doubs</option>
          <option value="Drôme">26 - Drôme</option>
          <option value="Eure">27 - Eure</option>
          <option value="Eure-et-Loir">28 - Eure-et-Loir</option>
          <option value="Finistère">29 - Finistère</option>
          <option value="Gard">30 - Gard</option>
          <option value="Haute-Garonne">31 - Haute-Garonne</option>
          <option value="Gers">32 - Gers</option>
          <option value="Gironde">33 - Gironde</option>
          <option value="Hérault">34 - Hérault</option>
          <option value="Ille-et-Vilaine">35 - Ille-et-Vilaine</option>
          <option value="Indre">36 - Indre</option>
          <option value="Indre-et-Loire">37 - Indre-et-Loire</option>
          <option value="Isère">38 - Isère</option>
          <option value="Jura">39 - Jura</option>
          <option value="Landes">40 - Landes</option>
          <option value="Loir-et-Cher">41 - Loir-et-Cher</option>
          <option value="Loire">42 - Loire</option>
          <option value="Haute-Loire">43 - Haute-Loire</option>
          <option value="Loire-Atlantique">44 - Loire-Atlantique</option>
          <option value="Loiret">45 - Loiret</option>
          <option value="Lot">46 - Lot</option>
          <option value="Lot-et-Garonne">47 - Lot-et-Garonne</option>
          <option value="Lozère">48 - Lozère</option>
          <option value="Maine-et-Loire">49 - Maine-et-Loire</option>
          <option value="Manche">50 - Manche</option>
          <option value="Marne">51 - Marne</option>
          <option value="Haute-Marne">52 - Haute-Marne</option>
          <option value="Mayenne">53 - Mayenne</option>
          <option value="Meurthe-et-Moselle">54 - Meurthe-et-Moselle</option>
          <option value="Meuse">55 - Meuse</option>
          <option value="Morbihan">56 - Morbihan</option>
          <option value="Moselle">57 - Moselle</option>
          <option value="Nièvre">58 - Nièvre</option>
          <option value="Nord">59 - Nord</option>
          <option value="Oise">60 - Oise</option>
          <option value="Orne">61 - Orne</option>
          <option value="Pas-de-Calais">62 - Pas-de-Calais</option>
          <option value="Puy-de-Dôme">63 - Puy-de-Dôme</option>
          <option value="Pyrénées-Atlantiques">
            64 - Pyrénées-Atlantiques
          </option>
          <option value="Hautes-Pyrénées">65 - Hautes-Pyrénées</option>
          <option value="Pyrénées-Orientales">66 - Pyrénées-Orientales</option>
          <option value="Bas-Rhin">67 - Bas-Rhin</option>
          <option value="Haut-Rhin">68 - Haut-Rhin</option>
          <option value="Rhône">69 - Rhône</option>
          <option value="Haute-Saône">70 - Haute-Saône</option>
          <option value="Saône-et-Loire">71 - Saône-et-Loire</option>
          <option value="Sarthe">72 - Sarthe</option>
          <option value="Savoie">73 - Savoie</option>
          <option value="Haute-Savoie">74 - Haute-Savoie</option>
          <option value="Paris">75 - Paris</option>
          <option value="Seine-Maritime">76 - Seine-Maritime</option>
          <option value="Seine-et-Marne">77 - Seine-et-Marne</option>
          <option value="Yvelines">78 - Yvelines</option>
          <option value="Deux-Sèvres">79 - Deux-Sèvres</option>
          <option value="Somme">80 - Somme</option>
          <option value="Tarn">81 - Tarn</option>
          <option value="Tarn-et-Garonne">82 - Tarn-et-Garonne</option>
          <option value="Var">83 - Var</option>
          <option value="Vaucluse">84 - Vaucluse</option>
          <option value="Vendée">85 - Vendée</option>
          <option value="Vienne">86 - Vienne</option>
          <option value="Haute-Vienne">87 - Haute-Vienne</option>
          <option value="Vosges">88 - Vosges</option>
          <option value="Yonne">89 - Yonne</option>
          <option value="Territoire-de-Belfort">
            90 - Territoire-de-Belfort
          </option>
          <option value="Essonne">91 - Essonne</option>
          <option value="Hauts-de-Seine">92 - Hauts-de-Seine</option>
          <option value="Seine-Saint-Denis">93 - Seine-Saint-Denis</option>
          <option value="Val-de-Marne">94 - Val-de-Marne</option>
          <option value="Val-d'Oise">95 - Val-d'Oise</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default DepartmentSelector;
