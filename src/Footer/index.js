import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          
          <WebsiteRights>
            Created by Nathan Peters © {new Date().getFullYear()}{" "}
          </WebsiteRights>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
