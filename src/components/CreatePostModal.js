import React, { useState } from 'react';

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const [postContent, setPostContent] = useState('');

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(postContent);
    setPostContent('');
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <button onClick={onClose}>&times;</button>
        </div>

        <div className="modal-content py-4 text-left px-6">
          <h1 className="text-2xl font-semibold">Create a New Post</h1>
          <textarea
            className="w-full h-32 mt-2 p-2 rounded border focus:outline-none focus:border-blue-500"
            placeholder="Write your post..."
            value={postContent}
            onChange={handleInputChange}
          />
          <div className="mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
