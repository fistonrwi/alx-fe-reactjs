import React, { useState } from 'react';
import { fetchUserData } from './services/apiService'; // Adjust the path as needed

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
      const data = await fetchUserData(username);
      setUserData(data); // Send data to parent component
    } catch (error) {
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
