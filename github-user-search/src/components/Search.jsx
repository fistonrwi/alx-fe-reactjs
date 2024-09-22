import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ setUserData }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("Looks like we can't find the user");
    setUsers([]);
    try {
      const data = await fetchUserData(username, location, minRepos);
      if (data.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setUsers(data);
        setUserData(data);
      }
    } catch (err) {
      setError("Error occurred while searching, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex flex-col space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border p-2"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="border p-2"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories"
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
              <p>Username: {user.login}</p>
              <p>Location: {user.location}</p>
              <p>Repositories: {user.public_repos}</p>
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
