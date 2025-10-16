// src/components/LoadingSpinner.jsx
import React from 'react';


const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="bouncing-balls">
        <div className="ball red"></div>
        <div className="ball red"></div>
        <div className="ball red"></div>
        <div className="ball red"></div>
      </div>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Nike_logo_black.svg" // Replace with your actual Nike logo path if stored locally
        alt="Nike Logo" 
        className="nike-logo" 
      />
    </div>
  );
};

export default LoadingSpinner;