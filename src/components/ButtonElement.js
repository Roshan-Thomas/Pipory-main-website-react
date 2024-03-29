import styled from 'styled-components'
// import {Link} from 'react-router-dom'

export const Button = styled.a`
    border-radius: 50px;
    background: #000;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin-left: ${({moveLeft}) => (moveLeft ? '40px' : '0px')};

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'conic-gradient(from 180deg at 50% 50%, #E229B3 -82.5deg, #FE5009 61.87deg, #E229B3 277.5deg, #FE5009 421.87deg)' : '#000')};
        color: #fff;
        font-weight: medium;
    }

    @media screen and (max-width: 768px) {
        margin-top: 20px;
        margin-left: 0px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`
