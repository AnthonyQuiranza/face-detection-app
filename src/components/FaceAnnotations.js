// src/components/FaceAnnotations.js
import React, { useRef, useEffect } from 'react';

const FaceAnnotations = ({ image, results }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const imageElement = document.getElementById('uploaded-image');

    if (imageElement && results) {
      canvas.width = imageElement.width;
      canvas.height = imageElement.height;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
      results.forEach((result, index) => {
        const { box } = result;
        context.strokeStyle = 'red';
        context.lineWidth = 2;
        context.strokeRect(box.x, box.y, box.width, box.height);
        context.font = '16px Arial';
        context.fillStyle = 'red';
        context.fillText(`Rostro ${index + 1}`, box.x, box.y > 10 ? box.y - 5 : 10);
      });
    }
  }, [image, results]);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }}></canvas>;
};

export default FaceAnnotations;
