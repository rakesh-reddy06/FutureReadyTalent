import React from "react";

import CartCollums from "./CartCollumns";
import Title from "../General/Title";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { useSelector } from "react-redux";
import CartTotalValue from "./CartTotalValue";
import { Container } from "reactstrap";
import styled from "styled-components";

function Cart(props) {
  const cart = useSelector((state) => state.store.cart);
  const cartEmpty = cart.length <= 0;

  return (
    <CartWrapper>
      {cartEmpty ? (
        <EmptyCart />
      ) : (
        <Container>
          <div className="pt-2 pb-4">
            <Title>Cart</Title>
          </div>

          <CartCollums />
          <CartList cart={cart} />
          <CartTotalValue cart={cart} history={props.history} />
        </Container>
      )}
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  min-height: calc(100vh - 120px);
`;

export default Cart;
