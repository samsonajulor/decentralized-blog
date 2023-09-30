import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import Button from '../components/Button';
import CardList from '../components/CardList';

const Home = () => {
  const navigate = useNavigate();
  const posts = usePosts(0, 1);
  console.log(posts, 'posts')

  const handleRegister = () => {
    navigate('/user/1');
  };
  return (
    <div className='flex flex-col container mx-auto py-8 items-center justify-center'>
      <Button text='Register' onClick={handleRegister} />
      <CardList posts={posts} id={1} />
    </div>
  );
};

export default Home;
