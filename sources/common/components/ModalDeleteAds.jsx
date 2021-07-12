import React, { useState } from "react";
import { FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "white",
    justifyContent: "space-around",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  container: {
    margin : "20px",
    borderRadius : "20px",
  }, 

  buttonCancel : {
    backgourndColor : "#B4B8D4"
  }
}));

function ModalDeleteAds({ handleDeleteTrue, handleReturn }) {
  const classes = useStyles();

  const [form, setForm] = useState({
    sell: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className={classes.container}>
        <p>Votre article a-t-il trouvé preneur sur notre site?</p>
        <RadioGroup name="sell" value={form.sell} onChange={handleChange}>
          <div className={classes.radioGroup}>
            <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
            <FormControlLabel value="Non" control={<Radio />} label="Non" />
          </div>
        </RadioGroup>
      </div>
      <div className={classes.button}>
        <Button
          variant="contained"
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

export default ModalDeleteAds;
