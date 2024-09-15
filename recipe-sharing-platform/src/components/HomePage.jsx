import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';
import './HomePage.css'; // Import CSS file

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
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card bg-white shadow-md rounded-md p-4 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p>{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
