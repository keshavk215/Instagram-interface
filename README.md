# Instagram Clone

This is a simple Instagram-like web application where users can view a feed of images and create posts by uploading or providing image URLs. The application stores posts locally and supports fundamental interactions like deleting posts.

## Technologies Used

* **React.js** - Frontend framework
* **Tailwind CSS** - Styling and responsive design
* **Framer Motion** - Animations and transitions
* **Local Storage** - Persistent storage for posts

## Installation & Setup

Follow these steps to set up the project on your local machine:

### Prerequisites

* Node.js and npm installed on your system

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/instagram-clone.git
   cd instagram-clone
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```

## Running the Application

* Once the server starts, open your browser and navigate to:
  ```
  http://localhost:5173
  ```
* You will see the feed page displaying existing posts.
* To create a post:
  1. Click the "Create Post" button.
  2. Upload an image or provide an image URL.
  3. Crop/reframe the image and add a caption.
  4. Submit to add it to the feed.
* To delete a post, click the 🗑 delete button on the post.

## Additional Features

* Fully responsive design for desktop and mobile views.
* Smooth scrolling and interactive animations.
* Lightweight and runs completely on the browser using local storage.
