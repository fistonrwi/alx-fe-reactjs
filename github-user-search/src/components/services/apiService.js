// src/services/apiService.js
import axios from 'axios';

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
