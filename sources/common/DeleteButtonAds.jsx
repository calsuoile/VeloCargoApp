import React, { useState } from "react";
import ModalDeleteAds from "./components/ModalDeleteAds";
import Dialog from "@material-ui/core/Dialog";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import IconButton from "@material-ui/core/IconButton";



function DeleteButtonAds() {
 

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
      <IconButton  variant="contained" color="secondary" onClick={handleDelete} >
        <DeleteOutlinedIcon color="secondary"/>
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
