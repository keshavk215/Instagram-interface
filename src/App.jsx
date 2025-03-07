import React from 'react'
import { useState } from 'react';
import Feed from './components/feed';
import CreatePostModal from './components/CreatePostModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-5 bg-white shadow-md text-center text-2xl font-bold border-b">Instagram Clone</header>
      <div className="p-6 flex justify-center">
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Create Post</button>
      </div>
      <Feed key={refresh} />
      {isModalOpen && <CreatePostModal onClose={() => setIsModalOpen(false)} onPostCreated={() => setRefresh(!refresh)} />}
    </div>
  );
};
export default App;