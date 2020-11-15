import React, { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";

function App() {
  const [recipesList, setRecipesList] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState({});
  const [basket, setBasket] = useState([]);

  const fetchRecipes = async (search) => {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${search}`
    );
    const data = await res.json();
    setRecipesList(data.recipes);
  };

  const fetchRecipeDetail = async (recipe_id) => {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`
    );
    const data = await res.json();
    setRecipeDetail(data.recipe);
  };

  const getSearchRecipesList = (search) => {
    fetchRecipes(search);
  };

  const getRecipeDetail = (recipe_id) => {
    fetchRecipeDetail(recipe_id);
  };

  const addToBasket = (ingredients) => {
    setBasket(ingredients);
  };

  return (
    <div className="app">
      <div className="app__left">
        <Search getSearchRecipesList={getSearchRecipesList} />
        <RecipeList
          recipeList={recipesList}
          getRecipeDetail={getRecipeDetail}
        />
      </div>
      <div className="app__middle">
        <RecipeDetail recipeDetail={recipeDetail} addToBasket={addToBasket} />
      </div>
      <div className="app__right">
        <Chart basket={basket} />
      </div>
    </div>
  );
}

export default App;
