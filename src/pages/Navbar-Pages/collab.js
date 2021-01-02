import React from 'react'
import { Layout, Info } from '../../components'
import Image from '../../images/collaboration.png'
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
} from '../../components/Hero/HeroElements'
import {collabObjOne} from '../../components/InfoSection/Data'

const Collab = () => {
    return (
        <Layout>
            <HeroContainer bgDark={true}>
                <HeroWrapper>
                    <ColumnLeft>
                        <HeroH1>Collab</HeroH1>
                        <HeroP>
                            Have 1000+ followers for your creative content on any other platform?  Bring them here and start earning money.
                        </HeroP>
                        <HeroBtn>
                            <HeroBtnLink to="/google-form-link">Apply Now</HeroBtnLink>
                        </HeroBtn>
                        <HeroBtn>
                            <HeroBtnLink to="/collab-learn-more">Learn More</HeroBtnLink>
                        </HeroBtn>
                    </ColumnLeft>
                    <ColumnRight>
                        <HeroImg src={Image} alt="collaboration" />
                    </ColumnRight>
                </HeroWrapper>
            </HeroContainer>

            <Info {...collabObjOne} />
        </Layout>
    )
}

export default Collab