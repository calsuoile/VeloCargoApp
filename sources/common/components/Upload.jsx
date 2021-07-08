import React, { createRef, useState } from "react";
import axios from "axios";

function Upload({ handlePicture }) {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const authEndpoint = process.env.REACT_APP_AUTHENTICATION_ENDPOINT;
  const uploadRef = createRef();

  const triggerUpload = () => {
    uploadRef.current.click();
  };

  const handleUpload = async (e) => {
    console.log(authEndpoint);
    const token = await axios.get(authEndpoint);
    console.log(
      "🚀 ~ file: Upload.jsx ~ line 17 ~ handleUpload ~ token",
      token
    );

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

    handlePicture(response.data.url);
  };

  return (
    <div>
      <button onClick={triggerUpload}>Select a file...</button>

      <input
        style={{ display: "none" }}
        ref={uploadRef}
        type="file"
        onChange={handleUpload}
      />
    </div>
  );
}

export default Upload;