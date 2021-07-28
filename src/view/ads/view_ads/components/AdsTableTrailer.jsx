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

export default function AdsTableTrailer({ ads }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>Prix</TableCell>
            <TableCell align="right">{ads?.price}€</TableCell>
            <TableCell className={classes.cell}>Catégorie</TableCell>
            <TableCell align="right">{ads?.type}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.cell}>Année</TableCell>
            <TableCell align="right">{ads?.build_year}</TableCell>
            <TableCell className={classes.cell}>Localisation</TableCell>
            <TableCell align="right">
              {ads?.department}, {ads?.country}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell}>Marque</TableCell>
            <TableCell align="right">{ads?.brand}</TableCell>
            <TableCell className={classes.cell}>Modèle</TableCell>
            <TableCell align="right">{ads?.model}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.cell}>Etat Général</TableCell>
            <TableCell align="right">{ads?.general_state}</TableCell>
            <TableCell className={classes.cell}>Volume Remorque (L)</TableCell>
            <TableCell align="right">{ads?.volume_trail}</TableCell>  
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell}>Charge Maximale (kg)</TableCell>
            <TableCell align="right">{ads?.max_load_kg}</TableCell>
            <TableCell className={classes.cell}>
              Nombre de places enfants
            </TableCell>
            <TableCell align="right">{ads?.max_children}</TableCell>
          </TableRow>

          {/* <TableRow>
            <TableCell className={classes.cell}>Garantie</TableCell>
            <TableCell align="right">
              {ads?.guarantee === 1 ? "Oui" : "Non"}
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
