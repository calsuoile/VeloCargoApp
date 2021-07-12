import React, { useState } from "react";
import ModalDelete from "./components/ModalDelete";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "black",
  },
}));

function DeleteButton() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(true);
  };

  const handleReturn = () => {
    setOpen(false);
  };

  const handleDeleteTrue = () => {
    setOpen(false);
    // axios.delete(`http://localhost:3030/article/${id});
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={handleDelete}
      >
        Supprimer
      </Button>
      <Dialog open={open}>
        {
          <ModalDelete
            handleDeleteTrue={handleDeleteTrue}
            handleReturn={handleReturn}
          />
        }
      </Dialog>
    </div>
  );
}

export default DeleteButton;
