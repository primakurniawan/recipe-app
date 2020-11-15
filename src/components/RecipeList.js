import React from "react";
import "./RecipeList.css";
const RecipeList = ({ recipeList, getRecipeDetail }) => {
  const onClick = (recipe_id) => {
    getRecipeDetail(recipe_id);
  };
  return (
    <div className="recipeList">
      {Array.isArray(recipeList) &&
        recipeList.map((e) => {
          return (
            <div
              className="recipeListItem"
              key={e.recipe_id}
              onClick={onClick.bind(this, e.recipe_id)}
            >
              <div className="recipeListItem__img">
                <img src={e.image_url} alt="" />
              </div>
              <div className="recipeListItem__info">
                <h2 className="recipeListItem__info--title">{e.title}</h2>
                <h3 className="recipeListItem__info--title">{e.publisher}</h3>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RecipeList;
