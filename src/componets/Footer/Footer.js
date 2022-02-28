import React from "react";
import { Col, Row } from "reactstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  FooterLink,
  FooterList,
  FooterListTitle,
  FooterSocialIcon,
  FooterSocialMediaList,
  FooterWrap,
  Rights,
} from "./FooterElements";

function Footer() {
  return (
    <FooterWrap>
      <Row>
        <Col className="my-3">
          <FooterListTitle>Social Media</FooterListTitle>
          <FooterSocialMediaList>
            <FooterSocialIcon href="/">
              <FaFacebook />
            </FooterSocialIcon>
            <FooterSocialIcon href="/">
              <FaTwitter />
            </FooterSocialIcon>
            <FooterSocialIcon href="/">
              <FaInstagram />
            </FooterSocialIcon>
          </FooterSocialMediaList>
          <div className="my-2">
            <Rights>{new Date().getFullYear()} | © all rights reserved </Rights>
          </div>
        </Col>
        <Col className="my-3">
          <FooterListTitle>Institutional</FooterListTitle>
          <FooterList>
            <FooterLink href="/">About Us</FooterLink>
            <FooterLink href="/">Our stores</FooterLink>
            <FooterLink href="/">Work with us</FooterLink>
          </FooterList>
        </Col>
        <Col className="my-3">
          <FooterListTitle>Call Center</FooterListTitle>
          <FooterList>
            <FooterLink href="/">My requests</FooterLink>
            <FooterLink href="/">Exchanges and returns</FooterLink>
            <FooterLink href="/">Purchase and sale term</FooterLink>
            <FooterLink href="/">Regret or withdrawal</FooterLink>
            <FooterLink href="/">
              Technical assistance from manufacturers
            </FooterLink>
          </FooterList>
        </Col>
      </Row>
    </FooterWrap>
  );
}

export default Footer;
