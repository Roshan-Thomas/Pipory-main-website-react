import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import { 
    NavbarContainer, 
    Nav,
    NavLogoWrap,
    Logo,
    SmNavLogoWrap,
    SmLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavOutwardLink
} from './NavbarElements'

import smlogo from '../../images/logo/orange_trans_bg.svg'
import logo from '../../images/logo/orange_logo_and_writing_trans_bg.svg'

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }   
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogoWrap to="/" onClick={toggleHome}>
                            <Logo src={logo} alt="pipory logo" />
                        </NavLogoWrap>
                        <SmNavLogoWrap to="/" onClick={toggleHome}>
                            <SmLogo src={smlogo} alt="small logo" />
                        </SmNavLogoWrap>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavOutwardLink href="https://piporyblog.wordpress.com/">
                                    Blog
                                </NavOutwardLink>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/collab">
                                    Collab
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/careers" >
                                    Careers
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contact">
                                    Contact
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink href="https://play.google.com/store/apps/details?id=com.pipory.pipory" target="_blank">Download Now</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
