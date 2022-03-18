import React, { useEffect} from "react";
import { Container, Section } from "../../globalStyles";
import { ContentRow, TextWrapper, TopLine, Heading, ContentButton, Subtitle, ImgWrapper, Img, ContentColumn } from './ContentStyles'
//Animación
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";


const Content = () => {
  return (
      <Section>
          <Container>
              <ContentRow>
                  <ContentColumn>
                      <TextWrapper>
                          <TopLine></TopLine>
                          <Heading></Heading>
                          <Subtitle></Subtitle>
                          <ContentButton></ContentButton>
                      </TextWrapper>
                  </ContentColumn>
                  <ContentColumn>
                      <ImgWrapper>
                      < Img />
                      </ImgWrapper>
                  </ContentColumn>
              </ContentRow>
          </Container>
      </Section>
  )
}

export default Content