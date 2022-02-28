import React from "react";
import styled from "styled-components";

export default function Title({ children }) {
  return (
    <TitleWrap className="row" dataid="title">
      <div className="col-10 mx-auto my-3 text-title text-center py-4">
        {children}
      </div>
    </TitleWrap>
  );
}

const TitleWrap = styled.div`
  font-family: "Permanent Marker", cursive;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-size: 2rem;
`;
