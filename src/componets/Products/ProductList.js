import React from "react";
import Product from "./Product";
import Title from "../General/Title";
import { useSelector } from "react-redux";
import Promotions from "../Promotions/Promotions";

function ProductList() {
  const products = useSelector((state) => state.store.products);

  return (
    <React.Fragment>
      <div className="container mb-5 pb-5">
        <Title>promotions</Title>
        <div className="row justify-content-center">
          <Promotions />
        </div>
        <Title>Products</Title>
        <div className="row justify-content-center">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
