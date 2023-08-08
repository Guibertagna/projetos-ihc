// src/RecipesList.js
import React from "react";
import { Link } from "react-router-dom";
import "./CSS/recipesList.css"; // Importe o arquivo CSS
import { fetchRecipes } from "./api";

const RecipesList = ({ recipes }) => {
  return (
    <div className="recipes-list-container">
      <h2>Lista de Receitas</h2>
      <ul className="recipes-list">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipe-item">
            {/* Renderize a foto da receita, se existir */}
            {recipe.photo && (
              <img src={URL.createObjectURL(recipe.photo)} alt={recipe.title} className="recipe-photo" />
            )}
            <Link to={`/recipe/${recipe.id}`} className="recipe-title">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesList;
