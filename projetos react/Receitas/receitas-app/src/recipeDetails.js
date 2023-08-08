// src/RecipeDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import "./CSS/recipeDetails.css"; // Importe o arquivo CSS

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div className="recipe-details-container">Receita não encontrada</div>;
  }

  return (
    <div className="recipe-details-container">
      <h2 className="recipe-details-title">{recipe.title}</h2>
      <p className="recipe-details-ingredients">Ingredientes: {recipe.ingredients.join(", ")}</p>
      <p className="recipe-details-instructions">Modo de Preparo: {recipe.modoPreparo}</p>
    </div>
  );
};

export default RecipeDetails;
