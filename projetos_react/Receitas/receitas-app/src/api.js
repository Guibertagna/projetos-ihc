// src/api.js
const recipesData = [
  {
    id: 1,
    title: "Bolo de Chocolate",
    ingredients: ["3 ovos", "2 xícaras de farinha de trigo", "1 xícara de açúcar", "1 xícara de chocolate em pó"],
    modoPreparo: "Em uma tigela, misture os ovos, a farinha, o açúcar e o chocolate em pó. Despeje a massa em uma forma untada e leve ao forno pré-aquecido a 180°C por 30 minutos.",
    photo: null, // Coloque a URL da foto, se necessário, ou deixe como null se estiver usando o objeto File
  },
  // Adicione outras receitas aqui
];

export const fetchRecipes = () => {
  // Simulação de uma chamada à API para obter as receitas
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recipesData);
    }, 500);
  });
};

export const addRecipe = (newRecipe) => {
  // Simulação de uma chamada à API para adicionar uma nova receita
  return new Promise((resolve) => {
    setTimeout(() => {
      recipesData.push(newRecipe);
      resolve();
    }, 500);
  });
};
