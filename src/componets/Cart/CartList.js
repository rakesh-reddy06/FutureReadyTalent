import React from "react";
import CartItem from "./CartItem";

function CartList({ cart }) {
  return (
    <div className="container-fluid">
      {cart.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
      <div
        style={{
          borderBottom: "0.01px solid lightgray",
          width: "90%",
          marginBottom: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></div>
    </div>
  );
}

export default CartList;
