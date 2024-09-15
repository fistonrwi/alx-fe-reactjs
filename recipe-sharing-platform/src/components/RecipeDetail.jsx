import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching recipe details based on ID
    const selectedRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  // Sample ingredients and instructions based on the recipe title
  const ingredients = recipe.id === 1 ? [
    "200g spaghetti",
    "100g pancetta",
    "2 large eggs",
    "50g pecorino cheese",
    "Black pepper",
    "Salt"
  ] : [
    "500g chicken breast, cubed",
    "200g yogurt",
    "2 tbsp tikka masala paste",
    "1 large onion, chopped",
    "400g tomato puree",
    "200ml cream",
    "Fresh coriander"
  ];

  const instructions = recipe.id === 1 ? [
    "Cook spaghetti in salted water until al dente.",
    "Fry pancetta in a pan until crispy.",
    "Whisk eggs and cheese together in a bowl.",
    "Combine pasta, pancetta, and egg mixture off the heat.",
    "Season with black pepper and serve immediately."
  ] : [
    "Marinate chicken in yogurt and tikka masala paste for 2 hours.",
    "Cook chicken in a hot pan until charred.",
    "In the same pan, fry onions until soft.",
    "Add tomato puree and cook for 10 minutes.",
    "Stir in cream and cook for a further 5 minutes.",
    "Serve chicken tikka masala garnished with fresh coriander."
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0"
        />
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
