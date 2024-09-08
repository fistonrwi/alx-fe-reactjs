// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Ensure this matches ":id" in the route

  return <div>Reading blog post with ID: {id}</div>;
}

export default BlogPost;
