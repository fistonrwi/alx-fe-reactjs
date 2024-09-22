export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`, // Ensure API key is set
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('User not found'); // Ensure this throws when user doesn't exist
  }
};
