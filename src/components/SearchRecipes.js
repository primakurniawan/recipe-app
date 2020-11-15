import React from "react";
import RecipeList from "./RecipeList";
import Search from "./Search";

const SearchRecipes = ({ getListSearchRecipes, recipesList }) => {
  const getSearchRecipes = (search) => {
    getListSearchRecipes(search);
  };
  return (
    <div className="SearchRecipes">
      <Search getSearchRecipes={getSearchRecipes} />
      <RecipeList recipesList={recipesList} />
    </div>
  );
};

export default SearchRecipes;
