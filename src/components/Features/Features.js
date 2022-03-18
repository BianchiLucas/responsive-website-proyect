import React from 'react'
import { Container, Section } from '../../globalStyles'
import { FeatureText, FeatureTitle, FeatureWrapper, FeatureColumn, FeatureImageWrapper, FeatureName, FeatureTextWrapper } from './FeaturesStyles'
import { FeatureData } from '../../data/FeatureData'


const Features = () => {

    //Parametros de Animación
    const initial = {
        y: 40,
        opacity: 0
    }
    const animate = {
        y: 0, 
        opacity: 1
    }

    return (
        <Section position='relative' id='about' inverse smPadding='50px 10px' >
            <Container>
                <FeatureTextWrapper>
                    <FeatureTitle>
                        What we offer
                    </FeatureTitle>
                </FeatureTextWrapper>
                <FeatureWrapper>
                {FeatureData.map((element, index) => (
                    <FeatureColumn initial={initial} animate={animate} transition={{ duration: 0.5 + index*0.1 }} key={index} >
                        <FeatureImageWrapper>
                            {element.icon}
                        </FeatureImageWrapper>
                        <FeatureName> {element.name} </FeatureName>
                        <FeatureText> {element.description} </FeatureText>
                    </FeatureColumn>
                ))}
                </FeatureWrapper>
            </Container>
        </Section>
    )
}

export default Features