import React from 'react'
import {
    HeroContainer,
    HeroWrapper,
    ColumnLeft,
    HeroImg,
    ColumnRight,
    HeroH1,
    HeroP,
    HeroBtn,
    HeroBtnLink
} from './HeroElements'
import Image from '../../images/hero-pic.webp'

const Hero = () => {
    return (
        <HeroContainer bgDark={true}>
            <HeroWrapper>
                <ColumnLeft>
                    <HeroImg src={Image} alt="hero image" />
                </ColumnLeft>
                <ColumnRight>
                    <HeroH1>Your Creativity deserves to be rewarded.</HeroH1>
                    <HeroP>Exclusive rewards, discounts & monetization for your content</HeroP>
                    <HeroBtn>
                        <HeroBtnLink href="https://play.google.com/store/apps/details?id=com.pipory.pipory" target="_blank">Download Now</HeroBtnLink>
                    </HeroBtn>
                </ColumnRight>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
