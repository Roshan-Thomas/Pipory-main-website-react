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
    Img,
    ButtonWrapper,
    Button1,
    Button2
} from './HeroInfoElements'

const HeroInfo = ({
    id,
    imgStart,
    headline1,
    headline2,
    fontBig,
    description,
    img,
    alt,
    ButtonText1,
    ButtonText2,
    buttonShow
}) => {
    return (
        <>
            <HeroContainer id={id}>
                <HeroWrapper>
                    <HeroRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading2>{headline2}</Heading2>
                                <Heading1 fontBig={fontBig}>{headline1}</Heading1>
                                <Paragraph>{description}</Paragraph>
                            </TextWrapper>
                            <ButtonWrapper>
                                <Button1 buttonColor={true}>{ButtonText1}</Button1>
                                <Button2 buttonColor={false} buttonShow={buttonShow}>{ButtonText2}</Button2>
                            </ButtonWrapper>
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
