import styled from 'styled-components'
import {Link} from 'react-router-dom'

var buttonbg = 'conic-gradient(from 180deg at 50% 50%, #CA00ED -82.5deg, #6200EE 61.87deg, #CA00ED 277.5deg, #6200EE 421.87deg)';

export const HeroContainer = styled.div`
    color: #000;
    background: #fff;

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

export const HeroWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const HeroRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 700px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Heading1 = styled.h1`
    margin-bottom: 20px;
    font-size: ${({fontBig}) => (fontBig ? '150px' : '120px')};
    font-weight: 600;
    line-height: 1;
    color: #000;

    @media screen and (max-width: 480px) {
        font-size: 70px;
        line-height: 1.1;
    }
`

export const Heading2 = styled.h2`
    margin-bottom: 20px;
    font-size: 60px;
    font-weight: 600;
    line-height: 1;
    color: #000;

    @media screen and (max-width: 480px) {
        font-size: 40px;
        line-height: 1.1;
    }
`

export const Paragraph = styled.p`
    max-width: 600px;
    margin-bottom: 35px;
    font-size: 25px;
    font-weight: 300;
    line-height: 30px;
    color: #2b2b2b;
    text-transform: lowercase;
`

export const ImgWrap = styled.div`
    max-width: 700px;
    height: 100%;

    @media screen and (max-width: 780px) {
        display: none;
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0;
    padding-right: 0; 
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Button1 = styled(Link)`
    border-radius: 50px;
    background: ${({buttonColor}) => (buttonColor ? `${buttonbg}` : `#fff`)};
    white-space: nowrap;
    padding: 15px 70px;
    margin: 0 10px;
    color: ${({buttonColor}) => (buttonColor ? '#fff' : '#CA00ED')};
    font-size: 20px;
    font-weight: bold;
    outline: none;
    border: ${({buttonColor}) => (buttonColor ? `10px solid ${buttonbg}` : '3px solid #CA00ED')};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        border: ${({buttonColor}) => (buttonColor ? '5px solid #CA00ED' : '5px solid #000')};
    }

    @media screen and (max-width: 350px) {
        padding: 15px 55px;
    }

    @media screen and (max-width: 300px) {
        padding: 15px 35px;
    }
`

export const Button2 = styled(Button1)`
    display: ${({buttonShow}) => (buttonShow ? '' : 'none')};
`