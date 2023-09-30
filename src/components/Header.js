import React from 'react';
import Button from "./Button";

const Header = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <Button text="Connect" onClick={handleClick} className="mt-4" />
  );
};

export default Header;
