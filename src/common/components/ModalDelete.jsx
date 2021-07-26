import React, { useState } from "react";
import { FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "black",
    justifyContent: "space-around",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
}));

function ModalDelete({ handleDeleteTrue, handleReturn }) {
  const classes = useStyles();

  const [form, setForm] = useState({
    sell: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <p>Clément, es tu sûr de vouloir supprimer cet article?</p>
        <RadioGroup name="sell" value={form.sell} onChange={handleChange}>
          <div className={classes.radioGroup}>
            <FormControlLabel value="Oui" control={<Radio />} label="Biensûr" />
            <FormControlLabel value="Non" control={<Radio />} label="Oh que non" />
          </div>
        </RadioGroup>
      </div>
      <div className={classes.button}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReturn}
          className={classes.buttonCancel}
        >
          Annuler
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteTrue}
          className={classes.buttonDelete}
        >
          Supprimer
        </Button>
      </div>
    </div>
  );
}

export default ModalDelete;
