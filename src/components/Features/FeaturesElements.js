import styled from 'styled-components'

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    margin-bottom: 0px;
`

export const FeaturesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 50px;

    @media screen and (max-width: 1080px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const FeaturesCard = styled.div`
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    transition: all 0.2s ease-in-out;
`

export const FeaturesImage = styled.img`
    height: 100%;
    width: 100%;
    margin-bottom: 10px;
`

export const FeaturesH1 = styled.h1`
    font-size: 100px;
    font-family: 'Kanit';
    text-transform: uppercase;
    font-weight: 900;
    color: #2B2B2B;
    margin: 50px 0px;

    @media screen and (max-width: 768px) {
        font-size: 80px;
    }

    @media screen and (max-width: 480px) {
        font-size: 60px;
    }

    @media screen and (max-width: 360px) {
        font-size: 40px;
    }
`

export const FeaturesH2 = styled.h2`
    font-size: 40px;
    font-family: 'Kanit';
    text-transform: uppercase;
    font-weight: 800;
    line-height: 1;
    color: #FE5009;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        font-size: 25px;
    }

    @media screen and (max-width: 300px) {
        font-size: ${({small}) => (small ? '22px' : '25px')};
    }
`

export const FeaturesP = styled.p`
    font-size: 20px;
    color: #fff;
    text-transform: lowercase;
    font-weight: 500;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`