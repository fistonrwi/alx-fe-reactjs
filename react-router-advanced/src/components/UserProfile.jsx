import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams(); // Get the dynamic part of the URL

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      {/* Fetch and display user details based on the username */}
    </div>
  );
}

export default UserProfile;
