import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
    
  },

  container: {
    width: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  cell: {
      fontFamily : "Open Sans Condensed",
      fontWeight: "bold",
      color: "rgba(104, 219, 150, 1)"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function AdsTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>Prix</TableCell>
            <TableCell align="right">2600 €</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.cell}>Catégorie</TableCell>
            <TableCell align="right">Triporteur</TableCell>
            <TableCell className={classes.cell}>Marque</TableCell>
            <TableCell align="right">Peugeot</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.cell}>Modèle</TableCell>
            <TableCell align="right">Nimbus 2000</TableCell>
            <TableCell className={classes.cell}>Localisation</TableCell>
            <TableCell align="right">Bordeaux</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.cell}>Garantie</TableCell>
            <TableCell align="right">Oui</TableCell>
            <TableCell className={classes.cell}>Etat Général</TableCell>
            <TableCell align="right">Bon état</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.cell}>Numéro Bicicode</TableCell>
            <TableCell align="right">Oui</TableCell>
            <TableCell className={classes.cell}>Controle Technique</TableCell>
            <TableCell align="right">XXX</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
