import React from 'react'
import { useState } from 'react';
import { savePost } from '../utils/localStorageUtils';
import Cropper from 'react-easy-crop';

const CreatePostModal = ({ onClose, onPostCreated }) => {
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleCropComplete = async (_, croppedAreaPixels) => {
    // Simulate image cropping (normally done with a library like canvas or backend service)
    setCroppedImage(image);
  };

  const handleSubmit = () => {
    if (!croppedImage) return;
    savePost({ image: croppedImage, caption });
    onPostCreated();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Create New Post</h2>
        <input type="text" placeholder="Image URL" className="w-full border p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" value={image} onChange={(e) => setImage(e.target.value)} />
        <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center">
          {image && (
            <Cropper image={image} crop={crop} zoom={zoom} aspect={1} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={handleCropComplete} />
          )}
        </div>
        <textarea placeholder="Caption" className="w-full border p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" value={caption} onChange={(e) => setCaption(e.target.value)}></textarea>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Post</button>
        </div>
      </div>
    </div>
  );
};
export default CreatePostModal;
