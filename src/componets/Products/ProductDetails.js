import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../General/Button";
import { addToCart, toggleModal } from "../../state/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function ProductDetails() {
  let { id, img, model, inCart, company, info, price, title } = useSelector(
    (state) => state.store.currentProduct
  );

  const dispatch = useDispatch();

  return (
    <ProductDetailsWrapper className="detail container py-3">
      <div className="row">
        <h1>{title}</h1>
      </div>

      <div className="row">
        <div className="col-10 col-md-6 mx-auto my-3 text-capitalize text-center">
          <img src={img} alt="product" className="detail__img" />
        </div>

        <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
          <h3>Model: {model}</h3>
          <h4 className="text-upercase text-muted">brand: {company}</h4>
          <h4 className="my-3 text-muted">
            price:
            <span className="Detail__price mr-1"> $ {price}</span>
          </h4>
          <h6>
            <strong>Product description</strong> :
            <p className="Detail__info">{info}</p>
          </h6>

          <Link to="/">
            <SecondaryButton>Back to Products</SecondaryButton>
          </Link>

          <SecondaryButton
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
          </SecondaryButton>
        </div>
      </div>
    </ProductDetailsWrapper>
  );
}

const ProductDetailsWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 3rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 14px;

    .detail__img {
      height: 40vh;
    }
  }

  .detail__img {
    max-height: 60vh;
  }

  .Detail__price {
    font-size: "2rem";
    color: var(--red);
  }

  .Detail__info {
    color: #585757;
    letter-spacing: 0.5px;
  }
`;

export default ProductDetails;
