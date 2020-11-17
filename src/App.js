import React, { useState, useEffect } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Pagination from "./components/Pagination";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
function App() {
  const [recipesList, setRecipesList] = useState([]);
  const [recipesListToShow, setRecipesListToShow] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState({});
  const [basket, setBasket] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchRecipes = async (search) => {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${search}`
      );
      const data = await res.json();
      if (data.hasOwnProperty("recipes") && data.hasOwnProperty("count")) {
        setRecipesList(data.recipes);
        setPage(1);
        setTotalPage(Math.ceil(data.count / 10));
        setErrorMessage("");
      } else {
        throw data.error;
      }
    } catch (err) {
      console.error(err);
      setRecipesList([]);
      setPage(0);
      setTotalPage(0);
      setErrorMessage(err);
    }
  };

  const fetchRecipeDetail = async (recipe_id) => {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`
      );
      const data = await res.json();
      setRecipeDetail(data.recipe);
    } catch (err) {
      console.error(err);
    }
  };

  const getSearchRecipesList = (search) => {
    fetchRecipes(search);
  };

  const getRecipeDetail = (recipe_id) => {
    fetchRecipeDetail(recipe_id);
  };

  const addToBasket = (ingredients) => {
    setBasket([...basket, ...ingredients]);
  };

  const deleteFromBasket = (ingredient) => {
    setBasket(basket.filter((e) => e !== ingredient));
  };

  const changePage = (page) => {
    setPage(page);
    setRecipesListToShow(recipesList.slice(page * 10 - 10, page * 10 - 1));
  };

  useEffect(() => {
    setRecipesListToShow(recipesList.slice(page * 10 - 10, page * 10 - 1));
  }, [recipesList, page]);

  return (
    <div className="app">
      <div className="app__left">
        <Search getSearchRecipesList={getSearchRecipesList} />
        {errorMessage !== "" && <span>{errorMessage}</span>}
        <RecipeList
          recipeList={recipesListToShow}
          getRecipeDetail={getRecipeDetail}
        />
        {totalPage > 0 && (
          <Pagination
            page={page}
            changePage={changePage}
            totalPage={totalPage}
          />
        )}
      </div>
      <div className="app__middle">
        <RecipeDetail recipeDetail={recipeDetail} addToBasket={addToBasket} />
      </div>
      <div className="app__right">
        <Chart basket={basket} deleteFromBasket={deleteFromBasket} />
      </div>
    </div>
  );
}

export default App;
