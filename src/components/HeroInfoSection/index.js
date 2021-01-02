import React from 'react'
import {
    HeroContainer,
    HeroWrapper,
    HeroRow,
    Column1,
    TextWrapper,
    Heading1,
    Heading2,
    Paragraph,
    Column2,
    ImgWrap,
    Img
} from './HeroInfoElements'

const HeroInfo = ({
    id,
    imgStart,
    headline1,
    headline2,
    description,
    img,
    alt
}) => {
    return (
        <>
            <HeroContainer id={id}>
                <HeroWrapper>
                    <HeroRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading2>{headline2}</Heading2>
                                <Heading1>{headline1}</Heading1>
                                <Paragraph>{description}</Paragraph>
                            </TextWrapper>
                            {/* TODO: Add Buttons */}
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </HeroRow>
                </HeroWrapper>
            </HeroContainer>   
        </>
    )
}

export default HeroInfo
