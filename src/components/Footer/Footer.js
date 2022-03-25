import React from 'react'
import { Section, Row } from '../../globalStyles'
import { footerData, footerSocialData } from '../../data/FooterData'
import { FooterContainer, FooterWrapper, FooterSubscription, FooterSubHeading, FooterRow, FooterGrid, FooterColumn, FooterSubText, FooterLinkContainer, FooterLinkItems, FooterLink, FooterLogo, SocialIcon, FooterRights, FooterSocialIcon, FooterAddress } from './FooterStyles'


const Footer = () => {
  return (
      <Section padding="4rem 0 2rem 0" >
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
                          {footerSocialData.map((item, index) => (
                              <FooterSocialIcon key={index} href="/" target="_blank" aria-label={social.name} >
                                  {social.icon}
                              </FooterSocialIcon>
                          ))}
                      </Row>
                  </FooterColumn>
              </FooterGrid>
          </FooterWrapper>
      </Section>
  )
}

export default Footer