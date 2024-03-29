import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    font-family: 'Poppins';
`;


export const NavLogoWrap = styled(Link)`
    justify-self: start;
    cursor: pointer;
    display: flex;
    align-items: center;
    max-width: 120px;
    margin-left: 0px;

    @media screen and (max-width: 480px) {
        display: none;
    }

    /* @media screen and (max-width: 300px){
        max-width: 100px;
        margin-left: 0px;
    } */
`

export const SmNavLogoWrap = styled(Link)`
    display: none;
    
    @media screen and (max-width: 480px){
        justify-self: start;
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-left: 30px;
        max-width: 40px;
    }

    @media screen and (max-width: 280px) {
        max-width: 30px;
    }
`

export const Logo = styled.img`
    width: 100%;
`

export const SmLogo = styled.img`
    width: 100%;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    font-family: 'Poppins';
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: lowercase;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #FE5009;
    }
`;

export const NavOutwardLink = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: lowercase;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #FE5009;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled.a`
    border-radius: 50px;
    background: conic-gradient(from 180deg at 50% 50%, #E229B3 -82.5deg, #FE5009 61.87deg, #E229B3 277.5deg, #FE5009 421.87deg);
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`