import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>
  );
};

export default CardList;
