// src/App.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, CircularProgress, Grid, Card, CardContent, Box } from '@mui/material';
import ImageUpload from './components/ImageUpload';
import ResultDisplay from './components/ResultDisplay';
import { analyzeImage } from './services/faceRecognitionService';

const App = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageUpload = async (imageFile) => {
    setLoading(true);
    setResults(null);
    setError(null);
    setImage(URL.createObjectURL(imageFile));
    try {
      const data = await analyzeImage(imageFile);
      setResults(data);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setError('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Análisis Facial</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '2rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">Subir Imagen</Typography>
                <ImageUpload onImageUpload={handleImageUpload} />
                {loading && <CircularProgress style={{ marginTop: '1rem' }} />}
                {error && <Typography color="error" style={{ marginTop: '1rem' }}>{error}</Typography>}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">Resultados</Typography>
                <ResultDisplay results={results} />
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
};

export default App;
