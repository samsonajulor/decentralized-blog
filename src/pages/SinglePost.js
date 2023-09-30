import React, { useState } from 'react';
import Content from '../components/Content';
import UserDetailsModal from '../components/modals/UserDetailsModal';
import ConfirmationModal from '../components/modals/ConfirmModal';
import Icon from '../components/icons/Icons';

const user = {
  id: 1,
  name: 'John Doe',
  status: 'Active',
  postsCount: 10,
  ethereumAddress: '0xAbCdEfGhIjKlMnOpQrStUvWxYz',
};

const SinglePost = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleDonateOpenModal = () => {
    setIsDonateModalOpen(true);
  };

  const handleSubmit = () => {
    alert('Submit action performed!');
  };

  const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);

  const contentText = 'This is a single post';
  return (
    <>
      <Content text={contentText} />
      <div className='container mx-auto py-8 flex items-center justify-center'>
        <div className='mr-8'>
          <Icon onClick={() => setIsUserDetailsModalOpen(true)} text={'about me'} />
          <UserDetailsModal
            isOpen={isUserDetailsModalOpen}
            onClose={() => setIsUserDetailsModalOpen(false)}
            user={user}
          />
        </div>
        <div>
          <Icon onClick={handleDonateOpenModal} text={'donate'} />
          <ConfirmationModal
            isOpen={isDonateModalOpen}
            onClose={() => setIsDonateModalOpen(false)}
            onConfirm={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
