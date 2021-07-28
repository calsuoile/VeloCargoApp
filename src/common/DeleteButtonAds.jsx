import React, { useState, useEffect } from "react";
import ModalDeleteAds from "./components/ModalDeleteAds";
import Dialog from "@material-ui/core/Dialog";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

function DeleteButtonAds({ adsId, onDelete = null }) {
  const [open, setOpen] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(true);
  };

  const handleReturn = () => {
    setOpen(false);
  };

  const handleDeleteTrue = async (form) => {
    const token = localStorage.getItem("userToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}ads/${adsId}?soldOnWebsite=${
        form.sell === "Oui" ? 1 : 0
      }`,
      config
    );
    setOpen(false);
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div>
      <IconButton variant="contained" color="secondary" onClick={handleDelete}>
        <DeleteOutlinedIcon color="secondary" />
      </IconButton>
      <Dialog open={open} onClick={(e) => e.preventDefault()}>
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
