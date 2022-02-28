import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  addToCart,
  toggleModal,
  setCurrentProduct,
} from "../../state/storeSlice";

function Product(props) {
  const { id, title, img, price, inCart } = props.product;
  const dispatch = useDispatch();

  return (
    <ProductWrapper
      className="col-9 col-sm-6 col-md-4 col-lg-3  my-3 mx-auto"
      inCart={inCart}
    >
      <div className="card">
        <div className="card__img-container text-center p-5">
          <Link to="/details">
            <img
              src={img}
              alt="product"
              className="card__img img-container py-5"
              onClick={() => dispatch(setCurrentProduct(id))}
            />
          </Link>
          <button
            className="card__btn"
            disabled={inCart ? true : false}
            onClick={() => {
              dispatch(addToCart(id));
              dispatch(toggleModal());
            }}
          >
            {inCart ? (
              <p className="mb-0" disabled>
                In cart
              </p>
            ) : (
              <p className="mb-0">Add to Cart</p>
            )}
          </button>
        </div>

        <div className="card__footer d-flex justify-content-between px-3 py-2">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card__footer {
    background: transparent;
    border-top: transparent;
  }
  &:hover {
    .card {
      border: 0.5px solid lightgray;
      box-shadow: 2px 2px 5px 0px var(--dark);
    }
    .card__footer {
      background: lightgray;
    }
  }

  .card__img-container {
    position: relative;
    overflow: hidden;

    .card__img {
      height: 20rem;
    }

    &:hover .card__img {
      transition: all 0.5s linear;
      transform: scale(1.2);
    }
  }

  .card__btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.4rem 0.8rem;
    background: ${(props) => (props.inCart ? "var(--blue)" : "var(--red)")};
    border: none;
    color: white;
    font-size: 1.2rem;
    border-radius: 0.3rem 0 0 0;
    transform: translate(100%);
    transition: all 0.2s ease-in;
  }

  .card__img-container:hover .card__btn {
    transform: translate(0, 0);
  }
`;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
