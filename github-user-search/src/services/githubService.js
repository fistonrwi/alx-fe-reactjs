export const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`, // Ensure API key is set
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error("Looks like we can't find the user");
      } else {
        throw new Error("An error occurred while fetching the user");
      }
    }
  };
  