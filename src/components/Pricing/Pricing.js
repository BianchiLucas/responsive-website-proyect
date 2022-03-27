import React from "react"
import { Button, Heading, TextWrapper } from '../../globalStyles'
import { PricingSection, PricingWrapper, PricingContainer, PricingCard, PricingCardInfo, PricingCardPlan, PricingCardCost, PricingCardFeatures, PricingCardFeature } from './PricingStyles'
import { pricingData } from '../../data/PricingData'
import { IconContext } from "react-icons"

export default function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }} >
            <PricingSection id="pricing">
                <PricingWrapper>
                    <Heading>Pick your best option</Heading>
                    <TextWrapper mb="1.4rem" weight="600" size="1.1rem" color="white" align="center" >
                        Join the Great Crusade now!
                    </TextWrapper>
                    <PricingContainer>
                        {pricingData.map((card, index) => (
                            <PricingCard key={index} >
                                <PricingCardInfo>
                                    <PricingCardPlan> {card.title} </PricingCardPlan>
                                    <PricingCardCost> {card.price} </PricingCardCost>
                                    <PricingCardFeatures>
                                        {card.features.map((feature, index) => (
                                            <PricingCardFeature key={index}>
                                                {feature}
                                            </PricingCardFeature>
                                        ))}
                                    </PricingCardFeatures>
                                    <Button to="/">Sign up</Button>
                                </PricingCardInfo>
                            </PricingCard>
                        ))}
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}