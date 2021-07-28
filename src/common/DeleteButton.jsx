import React, { useState } from "react";
import ModalDelete from "./components/ModalDelete";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import { useRouter } from "next/router";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "black",
  },
}));

function DeleteButton({ id }) {
  const classes = useStyles();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(true);
  };

  const handleReturn = () => {
    setOpen(false);
  };

  const handleDeleteTrue = (id) => {
    setOpen(false);
    const token = localStorage.getItem("userToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}articles/${id}`, config)
      .then(() => {
        router.push("/articles/page/1");
      });
  };

  return (
    <div>
      <IconButton variant="contained" color="secondary" onClick={handleDelete}>
        <DeleteOutlinedIcon color="secondary" />
      </IconButton>
      <Dialog open={open} onClick={(e) => e.preventDefault()}>
        {
          <ModalDelete
            handleDeleteTrue={() => handleDeleteTrue(id)}
            handleReturn={handleReturn}
          />
        }
      </Dialog>
    </div>
  );
}

export default DeleteButton;
