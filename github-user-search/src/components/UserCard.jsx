import React from 'react';

const UserCard = ({ userData }) => {
  return (
    <div>
      <h2>{userData.name || userData.login}</h2>
      <img src={userData.avatar_url} alt={userData.login} width="150" />
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
