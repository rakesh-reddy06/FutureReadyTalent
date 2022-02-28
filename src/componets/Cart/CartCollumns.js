import React from "react";

function CartCollumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="mx-auto col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        <div className="mx-auto col-lg-2">
          <p className="text-uppercase">name</p>
        </div>
        <div className="mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        <div className="mx-auto col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="mx-auto col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}

export default CartCollumns;
