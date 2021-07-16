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
    alignItems: "center",
  },

  cell: {
    fontFamily: "Open Sans Condensed",
    fontWeight: "bold",
    color: "rgba(104, 219, 150, 1)",
  },
});


export default function AdsTable({ ads }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>Prix</TableCell>
            <TableCell align="right">{ads.price}€</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.cell}>Catégorie</TableCell>
            <TableCell align="right">{ads.category}</TableCell>
            <TableCell className={classes.cell}>Marque</TableCell>
            <TableCell align="right">{ads.brand}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.cell}>Modèle</TableCell>
            <TableCell align="right">{ads.model}</TableCell>
            <TableCell className={classes.cell}>Localisation</TableCell>
            <TableCell align="right">
              {ads.department}, {ads.country}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.cell}>Garantie</TableCell>
            <TableCell align="right">{ads.guarantee}</TableCell>
            <TableCell className={classes.cell}>Etat Général</TableCell>
            <TableCell align="right">{ads.general_state}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.cell}>Numéro Bicicode</TableCell>
            <TableCell align="right">{ads.bicycode}</TableCell>
            <TableCell className={classes.cell}>Eléctrique</TableCell>
            <TableCell align="right">{ads.electric}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
