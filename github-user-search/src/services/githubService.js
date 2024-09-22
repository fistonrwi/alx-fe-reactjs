import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = 0) => {
  try {
    const query = `${username} location:${location} repos:>=${minRepos}`;
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data.items; // Adjust based on API response structure
  } catch (error) {
    throw new Error('User not found');
  }
};
