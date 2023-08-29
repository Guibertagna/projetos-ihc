// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layout"; // Importe o componente Layout
import AddRecipe from "./addRecipes";
import RecipeDetails from "./recipeDetails";
import RecipesList from "./recipesList";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]); // Estado das receitas e a função para atualizá-lo

  return (
    <Router>
      <Layout> {/* Utilize o componente Layout para envolver as rotas */}
        <Routes>
          <Route path="/" element={<RecipesList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} />} />
          <Route
            path="/add"
            element={<AddRecipe recipes={recipes} setRecipes={setRecipes} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
