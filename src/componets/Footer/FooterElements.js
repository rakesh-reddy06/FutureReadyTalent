import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrap = styled.footer`
  background-color: #363742;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 3rem;
`;

export const FooterList = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #b4b4b4;
  &:hover {
    text-decoration: none;
    color: var(--red);
  }
`;

export const FooterListTitle = styled.h6`
  color: var(--white);
  font-size: 1.4rem;
`;

export const FooterSocialMediaList = styled.div`
  display: flex;
`;

export const FooterSocialIcon = styled(Link)`
  padding: 0rem 0.5rem;
  color: var(--green);
  font-size: 1.5rem;
  &:hover {
    color: var(--red);
  }
`;

export const Rights = styled.small`
  color: lightgray;
`;
