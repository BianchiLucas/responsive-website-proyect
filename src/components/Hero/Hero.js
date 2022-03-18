import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, MainHeading } from '../../globalStyles'
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyle'

const Hero = () => {
    return (
        <HeroSection>
            <HeroVideo src="./assets/Terra.mp4" autoPlay muted loop></HeroVideo>
            <Container>
                <MainHeading>Main Heading Text</MainHeading>
                <HeroText>Hero Text</HeroText>
                <ButtonWrapper>
                    <Link to={"signup"}>
                        <Button>Get started</Button>
                    </Link>
                    <HeroButton>Find more</HeroButton>
                </ButtonWrapper>
            </Container>
        </HeroSection>
    )
}

export default Hero