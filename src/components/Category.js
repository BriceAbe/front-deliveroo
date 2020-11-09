import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = ({ data }) => {
  console.log(data);
  return (
    <div className="menu-item">
      <h1>{data.name}</h1>
      <div className="category">
        {data.meals.map((meal, i) => {
          return (
            <div className="containerRepas">
              {/*  */}

              {meal.picture ? (
                <div className="repas">
                  <div className="description">
                    <h2 className="titre">{meal.title}</h2>
                    {meal.description ? (
                      <>
                        <p className="desc">{meal.description}</p>{" "}
                        <p className="price">
                          {meal.price} €{" "}
                          <span>
                            {" "}
                            {meal.popular ? (
                              <span className="star">
                                <FontAwesomeIcon className="star" icon="star" />
                                Populaire
                              </span>
                            ) : (
                              ""
                            )}
                          </span>
                        </p>{" "}
                      </>
                    ) : (
                      <p className="price-x">
                        {meal.price} €{" "}
                        <span>
                          {" "}
                          {meal.popular ? (
                            <span className="star">
                              <FontAwesomeIcon className="star" icon="star" />
                              Populaire
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </p>
                    )}
                  </div>

                  <img src={meal.picture} alt={meal.title} />
                </div>
              ) : (
                <div className="repas">
                  <div className="noimage">
                    <h2 className="titre">{meal.title}</h2>
                    {meal.description ? (
                      <>
                        <p className="desc">{meal.description}</p>{" "}
                        <p className="price">
                          {meal.price} €{" "}
                          <span>
                            {" "}
                            {meal.popular ? (
                              <span className="star">
                                <FontAwesomeIcon className="star" icon="star" />
                                Populaire
                              </span>
                            ) : (
                              ""
                            )}
                          </span>
                        </p>{" "}
                      </>
                    ) : (
                      <p className="price-x">
                        {meal.price} €{" "}
                        <span>
                          {" "}
                          {meal.popular ? (
                            <span className="star">
                              <FontAwesomeIcon className="star" icon="star" />{" "}
                              Populaire
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/*  */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
