import React from "react";

const Presentation = ({ data }) => {
  return (
    <div className="restaurant-info">
      <div className="restaurant-center">
        <div className="restaurant-description">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>

        <img className="restaurant-img" src={data.picture} alt="" />
      </div>
    </div>
  );
};

export default Presentation;
