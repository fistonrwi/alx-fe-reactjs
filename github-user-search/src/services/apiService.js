// src/services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`, // Uncomment if using API key
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
