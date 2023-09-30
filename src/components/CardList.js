import React from 'react';
import Card from './Card';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

const CardList = ({ posts, id }) => {
    const name = Math.random().toString();
  const avatar = createAvatar(lorelei, {
    seed: name,

  });

  const dataUri = avatar.toDataUriSync(); 
  console.log(dataUri, 'dataUri')

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {posts?.length > 0 ? (
        posts?.map((card, index) => (
          <Card
            image={dataUri} // Generate a random avatar URL for each card
            key={index}
            title={card.title}
            content={card.content}
            id={id}
          />
        ))
      ) : (
        <div className='flex justify-center items-center'>
          <p className='text-gray-600 text-2xl'>No posts yet</p>
        </div>
      )}
    </div>
  );
};

export default CardList;
