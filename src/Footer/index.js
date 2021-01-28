import React from 'react'


import {FooterContainer, FooterLinksContainer, FooterWrap, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, WebsiteRights } from "./FooterElements"

const Footer = () => {
    return (
        <>

    <FooterContainer>
        <FooterWrap>
           <FooterLinksContainer>
               <FooterLinksWrapper>
                   <FooterLinkItems>
                       <FooterLinkTitle> Links </FooterLinkTitle>
                          <FooterLink to="/contact"> Contact </FooterLink>
                          <FooterLink to="/contact"> Contact </FooterLink>
                          <FooterLink to="/contact"> Contact </FooterLink>
                          <FooterLink to="/contact"> Contact </FooterLink>
                      
                   </FooterLinkItems>
               </FooterLinksWrapper>
           </FooterLinksContainer>
           <WebsiteRights>Created by Nathan Peters © {new Date().getFullYear()} </WebsiteRights>
        </FooterWrap>
    </FooterContainer>

        </>
    )
}

export default Footer
