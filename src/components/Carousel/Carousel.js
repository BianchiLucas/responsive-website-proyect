import { useState } from "react";
import { data, sliderSettings } from '../../data/CarouselData'
import { Row, Heading, Section, TextWrapper } from "../../globalStyles";
import { IconContext } from "react-icons";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { CarouselImage, ImageWrapper, ButtonContainer, ReviewSlider, CardButton } from "./CarouselStyles"

import React from 'react'

const Carousel = () => {

  const [sliderRef, setSliderRef] = useState(null)

  return (
    <Section margin='auto' maxWidth='1280px' padding='50px 70px' inverse >
      <Row justify='space-between' margin='1rem' wrap='wrap'>
        <Heading width='auto' inverse >
          Find more about the Galaxy
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {
          data.map((element, index) => (
            <ImageWrapper kew={index}>
              <CarouselImage src={element.image} />
              <TextWrapper size='1.1rem' margin='0.4rem 0 0' weight='bold' >
                {element.title}
              </TextWrapper>
              <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f' >
                {element.description}
              </TextWrapper>
              <CardButton>Learn More</CardButton>
            </ImageWrapper>
          ))
        }
      </ReviewSlider>
    </Section>
  )
}

export default Carousel