import React from "react";

const Chart = ({ basket }) => {
  return (
    <div className="chart">
      {basket.length > 0 &&
        basket.map((e) => {
          return <li>{e}</li>;
        })}
    </div>
  );
};

export default Chart;
