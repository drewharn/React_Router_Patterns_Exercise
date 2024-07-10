// src/App.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ColorList from './components/ColorList';
import ColorDetail from './components/ColorDetail';
import ColorForm from './components/ColorForm';
import NotFound from './components/NotFound';

function App() {
  const [colors, setColors] = useState([
    { id: 1, name: 'Red', hex: '#FF0000' },
    { id: 2, name: 'Green', hex: '#00FF00' },
    { id: 3, name: 'Blue', hex: '#0000FF' },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, { ...newColor, id: colors.length + 1 }]);
  };

  return (
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<ColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="/" element={<Navigate to="/colors" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
