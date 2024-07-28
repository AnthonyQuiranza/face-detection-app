// src/components/ImageUpload.js
import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <div>
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Subir Imagen
        </Button>
      </label>
      <div>
      {selectedImage && <img src={selectedImage} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '20px', maxHeight:'250px' }} />}
      </div>
    </div>
  );
};

export default ImageUpload;
