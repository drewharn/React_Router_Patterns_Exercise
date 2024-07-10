import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>404 - Not Found</h2>
      <p>Oops! The page you're looking for does not exist.</p>
      <p>Go back to <Link to="/colors">Colors</Link></p>
    </div>
  );
};

export default NotFound;
