import React, { useState, useEffect } from 'react'; // React import should be at the top
import recipeData from '../data.json'; // Importing mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-semibold">{recipe.name}</h2>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
