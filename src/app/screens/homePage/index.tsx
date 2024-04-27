import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import React, { useEffect } from "react";
import PopularDishes from "./PopularDishes";
import "../../../css/home.css";


import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR **/

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) =>dispatch(setPopularDishes(data)),
});


 export default function HomePage() {
  const {setPopularDishes} = actionDispatch(useDispatch());

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setPopularDishes(data);
      })
      .catch((err) => console.log(err));
  }, []);

    return <div className="homepage">
      <Statistics/>
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>;
  }