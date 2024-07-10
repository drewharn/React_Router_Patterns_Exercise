// src/components/ColorDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ColorDetail = ({ colors }) => {
  const { color } = useParams();
  const navigate = useNavigate();

  const selectedColor = colors.find(c => c.name.toLowerCase() === color.toLowerCase());

  if (!selectedColor) {
    navigate('/colors');
    return null; // You can also render a loading message or component here
  }

  return (
    <div>
      <h2>{selectedColor.name} Color Detail</h2>
      <div style={{ backgroundColor: selectedColor.hex, width: '200px', height: '200px', marginBottom: '20px' }}></div>
      <p><strong>Name:</strong> {selectedColor.name}</p>
      <p><strong>Hex:</strong> {selectedColor.hex}</p>
    </div>
  );
};

export default ColorDetail;

