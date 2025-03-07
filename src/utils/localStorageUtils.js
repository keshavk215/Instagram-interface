export const getPosts = () => {
  return JSON.parse(localStorage.getItem('posts')) || [];
};

export const savePost = (post) => {
  const posts = getPosts();
  posts.unshift(post);
  localStorage.setItem('posts', JSON.stringify(posts));
};

export const deletePost = (index) => {
  const posts = getPosts();
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));
};
