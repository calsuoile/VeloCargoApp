import React, { useState } from "react";
import ModalDeleteAds from "./components/ModalDeleteAds";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "black",
  },
}));

function DeleteButtonAds() {
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
    // axios.delete(`http://localhost:3030/ads/${id});
  };

  return (
    <div>
      <IconButton className={classes.button} variant="contained" color="secondary">
        <DeleteOutlinedIcon onClick={handleDelete} />
      </IconButton>
      <Dialog open={open}>
        {
          <ModalDeleteAds
            handleDeleteTrue={handleDeleteTrue}
            handleReturn={handleReturn}
          />
        }
      </Dialog>
    </div>
  );
}

export default DeleteButtonAds;
