import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Default from "./componets/General/Default";
import Navbar from "./componets/General/Navbar";
import Cart from "./componets/Cart/Cart";
import ProductDetails from "./componets/Products/ProductDetails";
import ProductList from "./componets/Products/ProductList";
import Modal from "./componets/Products/ProductModal";
import Footer from "./componets/Footer/Footer";
import ScrollToTop from "./componets/General/ScrollToTop";

function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
      <Modal />
    </React.Fragment>
  );
}

export default App;
