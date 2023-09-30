import React, { useState } from 'react';
import Button from '../components/Button';
import SearchButton from '../components/SearchButton';
import CardList from '../components/CardList';
import CreatePostModal from '../components/modals/CreatePostModal';

const cards = [
  {
    title: 'Card 1',
    content: 'Content for Card 1',
  },
  {
    title: 'Card 2',
    content: 'Content for Card 2',
  },
  {
    title: 'Card 3',
    content: 'Content for Card 3',
  },
];

const UserProfile = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (content) => {
    const newPost = {
      id: Date.now(),
      content,
    };
    setPosts([...posts, newPost]);
    setIsCreatePostModalOpen(false);
  };

  const handleSearch = (query) => {
    alert(`Performing search for: ${query}`);
  };

  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col container mx-auto py-8 items-center justify-center'>
        <Button
          text='Create Post'
          onClick={() => setIsCreatePostModalOpen(true)}

        />
        <CreatePostModal
          isOpen={isCreatePostModalOpen}
          onClose={() => setIsCreatePostModalOpen(false)}
          onSubmit={handleCreatePost}
        />
        <SearchButton onSearch={handleSearch} />
        <CardList posts={cards} id={1} />
      </div>
    </div>
  );
};

export default UserProfile;
