import React from "react";
import Category from "./Category";

const Categories = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item, i) => {
        return <Category key={i} data={item} />;
      })}
    </div>
  );
};

export default Categories;
