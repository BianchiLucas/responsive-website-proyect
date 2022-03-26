import React from 'react'
import { Section, Row } from '../../globalStyles'
import { footerData, footerSocialData } from '../../data/FooterData'
import { FooterWrapper, FooterGrid, FooterColumn, FooterLinkItems, FooterLinkTilte, FooterLink, FooterLogo, SocialIcon, FooterRights, FooterSocialIcon, FooterAddress } from './FooterStyles'


const Footer = () => {
  return (
      <Section padding="4rem 0 1rem 0" >
          <FooterWrapper>
              <FooterGrid justify="space-betwen">
                  <FooterColumn id="footerLogo" >
                      <FooterLogo to="/" >
                          <SocialIcon src="" />
                      </FooterLogo>
                      <FooterAddress>
                          Holy Terra, Segmentum Solar
                      </FooterAddress>
                      <Row align="center" margin="auto 0 0 0" gap="1rem" >
                          {footerSocialData.map((social, index) => (
                              <FooterSocialIcon key={index} href="/" target="_blank" aria-label={social.name} >
                                  {social.icon}
                              </FooterSocialIcon>
                          ))}
                      </Row>
                  </FooterColumn>
                  {footerData.map((footerItem, index) => (
                      <FooterLinkItems key={index} >
                          <FooterLinkTilte> {footerItem.title} </FooterLinkTilte>
                          {footerItem.links.map((link, linkIndex) => (
                              <FooterLink key={linkIndex} to="/" > {link} </FooterLink>
                          ))}
                      </FooterLinkItems>
                  ))}
              </FooterGrid>
              <FooterRights>Imperium of Mankind © 31st Milenium</FooterRights>
          </FooterWrapper>
      </Section>
  )
}

export default Footer