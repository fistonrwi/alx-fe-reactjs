import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import recipeData from '../data.json';

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
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="bg-white shadow-md rounded-md p-4 block">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p>{recipe.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
