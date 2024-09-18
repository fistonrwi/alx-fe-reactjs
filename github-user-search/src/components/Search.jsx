import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ setUserData }) => {
  const [username, setUsername] = useState(''); // Stores input username
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [error, setError] = useState(''); // Tracks any error message
  const [user, setUser] = useState(null); // Stores user data from API

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setLoading(true); // Set loading state to true
    setError(''); // Clear any previous errors
    setUser(null); // Clear previous user data

    try {
      const data = await fetchUserData(username); // Fetch data from GitHub API
      setUser(data); // Set user data to state
      setUserData(data); // Optional: If you need to pass data to the parent component
    } catch (err) {
      setError(err.message); // Display error message from catch block
    } finally {
      setLoading(false); // Turn off loading state
    }
  };

  return (
    <div>
      {/* Search Input Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading Message */}
      {loading && <p>Loading...</p>}

      {/* Error Message */}
      {error && <p>{error}</p>}

      {/* Display User Data */}
      {user && (
        <div>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
          <p>Username: {user.login}</p>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
