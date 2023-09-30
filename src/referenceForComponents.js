import { useState } from 'react'
import './App.css';
import Button from "./components/Button";
import CardList from './components/CardLIsit';
import Content from './components/Content';
import CreatePostModal from './components/CreatePostModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (content) => {
    const newPost = {
      id: Date.now(),
      content,
    };
    setPosts([...posts, newPost]);
    setIsModalOpen(false);
  };
  const handleClick = () => {
    alert('Button clicked!');
  };

  const contentText = 'This is my context.'

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
    }
  ];
  return (
    <div className="App">
        <Button text="Click me" onClick={handleClick} className="mt-4" />
        <CardList cards={cards}/>
        <Content text={contentText} />
    {/* This is for the post modal */}
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Post Creation App</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => setIsModalOpen(true)}
      >
        Create Post
      </button>
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePost}
      />
      <CardList cards={cards}/>
    </div>
    </div>
  );
}

export default App;
