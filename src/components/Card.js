import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Card = ({ id, title, content, image }) => {
  return (
    <Link to={`/post/${id}`}>
      <div className='max-w-sm rounded overflow-hidden shadow-lg mt-1 mb-1'>
        <img className='w-32 h-32 object-cover' src={image} alt='joe' />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{title}</div>
          {/* truncate content */}
          <p className='text-gray-700 text-base'>{content.slice(0, 32)}</p>
        </div>
        <Button
          text='read more'
          onClick={() => null}
        />
      </div>
    </Link>
  );
};

export default Card;
