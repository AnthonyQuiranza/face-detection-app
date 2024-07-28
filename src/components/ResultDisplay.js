// src/components/ResultDisplay.js
import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';

const ResultDisplay = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <Box>
      {results.map((result, index) => (
        <Card key={index} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">Rostro {index + 1}</Typography>
            <Typography variant="body1">Edad: {result.age}</Typography>
            <Typography variant="body1">Género: {result.gender}</Typography>
            <Typography variant="body1">Emoción: {result.emotion}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ResultDisplay;
