import React from 'react'
import { motion } from 'framer-motion';

const Post = ({ post, onDelete }) => {
  return (
    <motion.div 
      className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-3 flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <span className="text-sm font-semibold">Username</span>
        </div>
        <button onClick={onDelete} className="text-red-500 text-sm">🗑 Delete</button>
      </div>
      <img src={post.image} alt="Post" className="w-full h-auto max-h-[500px] object-cover" />
      <div className="p-3">
        {post.caption && <p className="text-sm text-gray-700"><strong>Username</strong> {post.caption}</p>}
      </div>
      <div className="px-3 py-2 border-t flex justify-between text-gray-600 text-sm">
        <span>❤️ Like</span>
        <span>💬 Comment</span>
        <span>📤 Share</span>
      </div>
    </motion.div>
  );
};
export default Post;