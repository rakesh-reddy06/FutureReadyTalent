import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  incrementProduct,
  decrementProduct,
  removeItem,
  setCurrentProduct,
} from "../../state/storeSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  return (
    <CartItemWrapper className="CartItem row my-1 text-capitalize text-center mb-4">
      <div className="CartItem__img col-10 mx-auto col-lg-2">
        <Link to="/details">
          <img
            src={product.img}
            alt="product"
            width="80"
            className="img-fluid"
            onClick={() => dispatch(setCurrentProduct(product.id))}
          />
        </Link>
      </div>

      <div className="CartItem__product col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span> {product.title}
      </div>

      <div className="CartItem__price col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span> {product.price}
      </div>

      <div className="CartItem__count col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center align-items-center">
          <span
            className="btn-black mx-1"
            onClick={() => dispatch(decrementProduct(product.id))}
          >
            <i className="fas fa-minus"></i>
          </span>
          <span className="count mx-1">{product.count}</span>
          <span
            className="btn-black mx-1"
            onClick={() => dispatch(incrementProduct(product.id))}
          >
            <i className="fas fa-plus"></i>
          </span>
        </div>
      </div>

      <div className="CartItem__remove col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => dispatch(removeItem(product.id))}
        >
          <i className="fas fa-trash"></i>
        </div>
      </div>

      <div className="CartItem__total col-10 mx-auto col-lg-2">
        item total : <strong>$ {product.total} </strong>
      </div>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  font-size: 1.2rem;

  .CartItem__remove .cart-icon {
    color: gray;
    cursor: pointer;
  }

  .CartItem__count {
    .count {
      padding: 0rem;
    }

    .btn-black {
      padding: 0.3rem 0.6rem;
      font-size: 0.8rem;
      background-color: transparent;
      color: var(--dark);
      border-radius: 0;
      border: 1px solid black;
      cursor: pointer;
    }

    .btn-black:hover {
      background-color: var(--dark);
      color: var(--white);
    }
  }

  .CartItem__total .total {
    color: var(--blue);
  }
`;

export default CartItem;
