import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterOutwardLink,
    SocialMedia,
    SocialMediaWrap,
    LogoWrap,
    Logo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink,
} from './FooterElements'
import logo from '../../images/logo/writing_orange_trans_bg.svg'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Menu</FooterLinkTitle>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterOutwardLink href="https://piporyblog.wordpress.com/">Blog</FooterOutwardLink>
                                <FooterLink to="/collab">Collab</FooterLink>
                                <FooterLink to="/careers">Careers</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>More Info</FooterLinkTitle>
                                <FooterLink to="/1608757200">Terms of service</FooterLink>
                                <FooterLink to="/1609016400">Privacy Policy</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Customer Support</FooterLinkTitle>
                                <FooterOutwardLink href="mailto:support@pipory.com" target="_blank">support@pipory.com</FooterOutwardLink>
                                <FooterLink to="/contact">Contact Us</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterOutwardLink href="https://www.instagram.com/?hl=en" target="_blank" aria-label="Instagram">Instagram</FooterOutwardLink>
                                <FooterOutwardLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">Facebook</FooterOutwardLink>
                                <FooterOutwardLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube">Youtube</FooterOutwardLink>
                                <FooterOutwardLink href="https://twitter.com/" target="_blank" aria-label="Twitter">Twitter</FooterOutwardLink>
                                <FooterOutwardLink href="https://www.linkedin.com/company/pipory/" target="_blank" aria-label="LinkedIn">LinkedIn</FooterOutwardLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <LogoWrap to='/' onClick={toggleHome}>
                                <Logo src={logo} alt="pipory logo" />
                            </LogoWrap>
                            <WebsiteRights>Pipory © {new Date().getFullYear()}. All rights reserved </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="https://www.instagram.com/?hl=en" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                                <SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                                <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com/company/pipory/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>   
        </>
    )
}

export default Footer
