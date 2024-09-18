import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`, // Optional, add your API key here if needed
      },
    });
    return response.data; // Return the user data
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found'); // Handle user not found error
    } else {
      throw new Error('An error occurred while fetching data'); // Handle other errors
    }
  }
};
