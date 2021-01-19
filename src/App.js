import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { useShopify } from "./hooks";
import { useSelector } from "react-redux";

import "./App.css";

import Home from "./components/shop/Home";
import Products from "./components/shop/Products";
import Cart from "./components/shop/Cart";
import ProductView from "./components/shop/ProductView";

const App = (props) => {
  const {
    createShop,
    createCheckout,
    fetchProducts,
    // fetchCollection,
  } = useShopify();

  useEffect(() => {
    createShop();
    fetchProducts();
    createCheckout();
    // fetchCollection()
  }, []);

  const appState = useSelector((state) => state);

  console.log(appState);

  return (
    <Router>
      <div id="App">
        <Route exact path="/" render={() => <Redirect to="/Home" />} />
        <Route path="/Home" component={Home} />
        <Route path="/Home" component={Products} />
        <Route path="/Product/:productId" component={ProductView} />
        <Route path="/" component={Cart} />
      </div>
    </Router>
  );
};

export default App;
