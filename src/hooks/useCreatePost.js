import { useCallback } from 'react';
import { useConnection } from '../context/connection';
import { calculateGasMargin, getBlogContract } from '../utils';
import { toast } from 'react-toastify';

const useCreatePost = (content) => {
  const { isActive, provider } = useConnection();
  const createPost = useCallback(
    async (title, goal, duration) => {
      if (!title || !goal || !duration) return toast.info('Please provide all values');
      if (!isActive) return toast.info('please, connect');
      const contract = await getBlogContract(provider, true);
      const estimatedGas = await contract.createPost.estimateGas(content);

      return contract.createPost(content, {
        gasLimit: calculateGasMargin(estimatedGas),
      });
    },
    [content, isActive, provider]
  );

  return createPost;
};

export default useCreatePost;
