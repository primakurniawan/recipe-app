import React from "react";

const RecipeDetail = ({ recipeDetail, addToBasket }) => {
  const onClick = () => {
    addToBasket(recipeDetail.ingredients);
  };
  return (
    <div className="recipeDetail">
      <div className="recipeDetail__img">
        <img src={recipeDetail.image_url} alt="" />
      </div>
      <div className="recipeDetail__info">
        <h2 className="recipeDetail__info--title">
          <a target="blank" href={recipeDetail.source_url}>
            {recipeDetail.title}
          </a>
        </h2>
        <h3 className="recipeDetail__info--publisher">
          <a target="blank" href={recipeDetail.publisher_url}>
            {recipeDetail.publisher}
          </a>
        </h3>
        <ul className="recipeDetail__info--ingredients">
          {recipeDetail.hasOwnProperty("ingredients") &&
            recipeDetail.ingredients.map((e) => (
              <li className="recipeDetail__info--ingredients__item">{e}</li>
            ))}
        </ul>
      </div>
      <button className="addToBasket" onClick={onClick}>
        Add To Basket
      </button>
    </div>
  );
};

export default RecipeDetail;
