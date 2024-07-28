// src/services/faceRecognitionService.js
import * as faceapi from 'face-api.js';

const loadModels = async () => {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
  await faceapi.nets.faceExpressionNet.loadFromUri('/models');
  await faceapi.nets.ageGenderNet.loadFromUri('/models');
};

const translateResults = (age, gender, emotion) => {
  const genderTranslation = {
    male: 'masculino',
    female: 'femenino'
  };

  const emotionTranslation = {
    angry: 'enojado',
    disgusted: 'disgustado',
    fearful: 'asustado',
    happy: 'feliz',
    neutral: 'neutral',
    sad: 'triste',
    surprised: 'sorprendido'
  };

  return {
    age,
    gender: genderTranslation[gender] || gender,
    emotion: emotionTranslation[emotion] || emotion
  };
};

export const analyzeImage = async (imageFile) => {
  await loadModels();

  const img = await faceapi.bufferToImage(imageFile);
  const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withAgeAndGender().withFaceExpressions();

  if (detections.length === 0) {
    throw new Error('No face detected by face-api.js');
  }

  return detections.map(detection => {
    const { age, gender, expressions } = detection;
    const mainEmotion = Object.keys(expressions).reduce((a, b) => (expressions[a] > expressions[b] ? a : b));
    return translateResults(Math.round(age), gender, mainEmotion);
  });
};
