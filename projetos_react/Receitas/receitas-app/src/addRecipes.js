// src/AddRecipe.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRecipes, addRecipe } from "./api";
import "./CSS/addRecipes.css";

const AddRecipe = ({ recipes, setRecipes }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    modoPreparo: "",
    photo: null,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: e.target.files[0],
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Crie um novo objeto de receita com os dados do formulário, incluindo a foto
    const newRecipe = {
      id: Date.now(),
      title: formData.title,
      ingredients: formData.ingredients.split(",").map((ingredient) => ingredient.trim()),
      modoPreparo: formData.modoPreparo,
      photo: formData.photo,
    };

    // Atualize a lista de receitas com a nova receita
    await addRecipe(newRecipe);

    // Atualize a lista de receitas no estado
    const updatedRecipes = await fetchRecipes();
    setRecipes(updatedRecipes);

    // Limpe o formulário após adicionar a receita
    setFormData({
      title: "",
      ingredients: "",
      modoPreparo: "",
      photo: null,
    });

    // Redirecionar de volta para a página inicial após adicionar a receita
    navigate("/");
  };

  return (
    <div className="add-recipe-container">
      <h2 className="add-recipe-title">Adicionar Nova Receita</h2>
      <form className="add-recipe-form" onSubmit={handleFormSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label>Ingredientes (separados por vírgula):</label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label>Modo de Preparo:</label>
          <textarea
            name="modoPreparo"
            value={formData.modoPreparo}
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label>Foto:</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
};

export default AddRecipe;
