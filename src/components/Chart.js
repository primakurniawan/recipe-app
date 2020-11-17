import React from "react";
import "./Chart.css";

const Chart = ({ basket, deleteFromBasket }) => {
  const onClick = (ingredient) => {
    deleteFromBasket(ingredient);
  };
  return (
    <div className="chart">
      <ul className="chart__list">
        {basket.length > 0 &&
          basket.map((e) => {
            return (
              <li className="chart__list__item">
                <span className="chart__list__item--item">{e}</span>
                <button
                  className="chart__list__item--delete"
                  onClick={onClick.bind(this, e)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Chart;
