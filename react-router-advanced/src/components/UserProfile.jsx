// src/components/UserProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <div><h2>User Profile for User {userId}</h2></div>;
}

export default UserProfile;
