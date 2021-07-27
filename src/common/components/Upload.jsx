import React, { createRef, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

function Upload({ handlePicture }) {
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const authEndpoint = process.env.NEXT_PUBLIC_AUTHENTICATION_ENDPOINT;
  const uploadRef = createRef();

  const triggerUpload = () => {
    uploadRef.current.click();
  };

  const handleUpload = async (e) => {
    const tokenBearer = localStorage.getItem("userToken");
    const token = await axios.get(authEndpoint, {
      headers: { Authorization: `Bearer ${tokenBearer}` },
    });

    // console.log(token);

    const formData = new FormData();

    formData.append("file", e.target.files[0]);
    formData.append("publicKey", publicKey);
    formData.append("fileName", e.target.files[0].name);
    formData.append("signature", token.data.signature);
    formData.append("expire", token.data.expire);
    formData.append("token", token.data.token);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const response = await axios.post(
      "https://upload.imagekit.io/api/v1/files/upload",
      formData,
      config
    );
    console.log(response.data);
    handlePicture(response.data.url);
  };

  return (
    <div>
      <div>
        <Button
          variant="outlined"
          color="primary"
          component="span"
          onClick={triggerUpload}
        >
          Insérer une image
          <AddAPhotoIcon style={{ marginLeft: "5px" }} />
        </Button>
        <input
          style={{ display: "none" }}
          ref={uploadRef}
          type="file"
          onChange={handleUpload}
        />
      </div>
    </div>
  );
}

export default Upload;
