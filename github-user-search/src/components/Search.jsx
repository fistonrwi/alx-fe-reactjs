import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setUserData }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError(''); // Reset error before making the request
    if (!username) {
      setError('Please enter a username');
      return;
    }

    try {
      // Fetch data from GitHub API
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          // Add the Authorization header if the API key is necessary
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
        },
      });
      setUserData(response.data); // Send data to parent component
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('User not found'); // Display error message if the user is not found
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Search;
