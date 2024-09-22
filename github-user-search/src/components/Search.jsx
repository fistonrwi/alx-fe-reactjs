import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState(''); // Input value state
  const [user, setUser] = useState(null); // User data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const fetchUserData = async (username) => {
    try {
      setLoading(true);
      setError(''); // Reset error before making the API call
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data); // Set user data on success
    } catch (err) {
      setError('Looks like we can’t find the user'); // Display the error message
    } finally {
      setLoading(false); // Stop loading after the API call
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      setError('Please enter a username');
      return;
    }
    fetchUserData(username);
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      
      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
          <h3>{user.name || user.login}</h3>
          <p>GitHub Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
        </div>
      )}
    </div>
  );
};

export default Search;
