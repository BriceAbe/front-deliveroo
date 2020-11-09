import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Panier from "./components/Panier";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://backdeliverooo.herokuapp.com/");
      const datas = response.data;
      console.log(datas);
      setData(datas);
      setisLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>En chargement...</span>
  ) : (
    <>
      <Header />
      <Presentation data={data.restaurant} />
      <div className="content">
        <div className="content-center">
          <div className="Menu">
            <Categories
              className="container"
              data={data.categories.slice(0, 6)}
            />
          </div>
          <Panier />
        </div>
      </div>
    </>
  );
}

export default App;
