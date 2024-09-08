import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Function to fetch posts data from an API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Using useQuery to fetch data
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  // Display loading state
  if (isLoading) return <div>Loading...</div>;

  // Display error state if the query fails
  if (isError) return <div>Error: {error.message}</div>;

  // Render fetched data
  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
