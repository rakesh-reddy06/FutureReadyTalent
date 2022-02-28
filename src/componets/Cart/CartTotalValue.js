import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../state/storeSlice";
import Paypal from "./Paypal";

function CartTotalValue({ cart, history }) {
  const dispatch = useDispatch();
  const deliveryFee = useSelector((state) => state.store.deliveryFee);
  const subTotalValue = cart
    .map((product) => product.total)
    .reduce((totalCart, totalProduct) => totalCart + totalProduct);
  const totalValue = deliveryFee + subTotalValue;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <button
            type="button"
            className="btn btn-outline-danger text-uppercase mb-3 px-5"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>

          <h5>
            <span>subtotal: </span>
            <strong>$ {subTotalValue}</strong>
          </h5>
          <h5>
            <span>fee: </span>
            <strong>$ {deliveryFee}</strong>
          </h5>
          <h3>
            <span>total value: </span>
            <strong> $ {totalValue}</strong>
          </h3>
          <Paypal
            totalValue={totalValue}
            clearCart={() => dispatch(clearCart())}
            history={history}
          />
        </div>
      </div>
    </div>
  );
}

export default CartTotalValue;
