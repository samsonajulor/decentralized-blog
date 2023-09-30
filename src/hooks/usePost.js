import { useEffect, useState } from 'react';
import { useConnection } from '../context/connection';
import { getBlogContract } from '../utils';

const usePost = (id) => {
  const { provider } = useConnection();
  const [ post, setPost ] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const contract = await getBlogContract(provider, false);
        const data = await contract.getPost(id);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id, provider, setPost]);
  return post;
};

export default usePost;
