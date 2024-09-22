import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Ensure the service is correct

const Search = ({ setUserData }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Error message state
  const [user, setUser] = useState(null); // For storing user data

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true);   // Set loading state to true
    setError("");       // Reset any error messages
    setUser(null);      // Reset user data before a new search

    try {
      const data = await fetchUserData(username); // Call API
      setUser(data);    // Set the returned user data
      setUserData(data); // Pass user data up
    } catch (err) {
      setError("Looks like we can't find the user"); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Display Loading State */}
      {loading && <p>Loading...</p>}

      {/* Display Error Message */}
      {error && <p>{error}</p>} {/* Displays the error message */}

      {/* Display User Information */}
      {user && (
        <div>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
          <p>Username: {user.login}</p> {/* Display 'login' from API response */}
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
