// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return <div>Reading blog post with ID: {postId}</div>;
}

export default BlogPost;
