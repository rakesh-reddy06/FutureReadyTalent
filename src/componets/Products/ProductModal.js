import React from "react";
import { SecondaryButton } from "../General/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../state/storeSlice";

function Modal() {
  const modalOpen = useSelector((state) => state.store.modalOpen);
  const product = useSelector((state) => state.store.currentProduct);
  const dispatch = useDispatch();
  return (
    <div>
      {modalOpen ? (
        <ModalContainer>
          <div className="row">
            <div
              id="modal"
              className="col-12 col-md-4 col-lg-6 mx-auto text-center text-capitalize p-4"
            >
              <h5>item added to the cart</h5>
              <img
                src={product.img}
                alt="product"
                className="img-fluid"
                width="300px"
              />
              <h5>{product.title}</h5>
              <h5 className="my-2 text-muted">
                price : <span className="price">${product.price}</span>
              </h5>
              <div className="modal-btns">
                <Link to="/">
                  <ModalBtn onClick={() => dispatch(toggleModal())}>
                    Continue Shopping
                  </ModalBtn>
                </Link>
                <Link to="/cart">
                  <ModalBtn onClick={() => dispatch(toggleModal())}>
                    Go to Cart
                  </ModalBtn>
                </Link>
              </div>
            </div>
          </div>
        </ModalContainer>
      ) : null}
    </div>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  .price {
    color: var(--red);
  }

  @media screen and (max-width: 600px) {
    #modal {
      max-width: 70vw;
      max-height: 100vh;

      & > img {
        width: 80%;
        padding: 2rem;
      }
    }
  }

  #modal {
    img {
      width: 50%;
      padding: 2rem;
    }
    width: 40vw;
    background: white;
    border-radius: 0.5rem;
  }

  .modal-btns {
    margin-top: 1rem;
  }
`;

const ModalBtn = styled(SecondaryButton)`
  width: 80%;
`;

export default Modal;
