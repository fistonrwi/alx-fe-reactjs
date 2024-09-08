import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams(); // Get the dynamic part of the URL

  return (
    <div>
      <h2>Blog Post #{postId}</h2>
      {/* Fetch and display blog post details based on the postId */}
    </div>
  );
}

export default BlogPost;
