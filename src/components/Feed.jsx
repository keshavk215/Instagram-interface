import React from 'react'
import { useState, useEffect } from 'react';
import Post from './Post';
import { getPosts, deletePost } from '../utils/localStorageUtils';
import { motion, AnimatePresence } from 'framer-motion';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleDelete = (index) => {
    deletePost(index);
    setPosts(getPosts());
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto overflow-y-auto h-screen">
      <AnimatePresence>
        {posts.map((post, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            transition={{ duration: 0.3 }}
          >
            <Post post={post} onDelete={() => handleDelete(index)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default Feed;
