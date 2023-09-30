import React from 'react';

const Content = ({ text }) => {
  return (
    <div className="bg-white rounded p-4 shadow-md">
      <p className="text-gray-800 text-lg">{text}</p>
    </div>
  );
};

export default Content;
