import React, { useState } from 'react';
import './iconAnimation.css'; // Assuming the CSS is in the same folder

const IconAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="nav-icon3"
      className= {`${isOpen ? 'open' : ''}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default IconAnimation;
