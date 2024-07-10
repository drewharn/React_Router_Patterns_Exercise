// src/components/ColorForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ColorForm = ({ addColor }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [hex, setHex] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = { name, hex };
    addColor(newColor);
    navigate('/colors');
  };

  return (
    <div>
      <h2>Add a New Color</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="hex">Hex Value:</label>
          <input
            type="color"
            id="hex"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default ColorForm;

