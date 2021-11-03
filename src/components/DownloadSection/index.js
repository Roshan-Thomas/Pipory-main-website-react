import React, {useState} from 'react'
import {Button} from '../ButtonElement'
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5'
import {IconContext} from 'react-icons/lib'
import logo from '../../images/logo/orange_trans_bg.svg'
import {
    DownloadContainer,
    LogoWrap,
    Logo,
    DownloadWrapper,
    DownloadH2,
    DownloadLinksWrapper,
} from './DownloadElements'

const Download = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <IconContext.Provider value={{ style: { paddingRight: '10px', fontSize: '40px'} }}>
                <DownloadContainer>
                    <DownloadWrapper>
                        <LogoWrap>
                            <Logo src={logo} alt="pipory logo" />
                        </LogoWrap>
                        <DownloadH2>Available Now</DownloadH2>
                        <DownloadLinksWrapper>
                            <Button
                                href="https://play.google.com/store/apps/details?id=com.pipory.pipory"
                                target="_blank"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                fontBig="true"
                            >
                            <IoLogoApple /> Download on Appstore
                            </Button>
                            <Button
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                moveLeft="true"
                                fontBig="true"
                                href="https://play.google.com/store/apps/details?id=com.pipory.pipory"
                                target="_blank"
                            >
                                <IoLogoGooglePlaystore /> Download on Playstore
                            </Button>
                        </DownloadLinksWrapper>
                    </DownloadWrapper>
                </DownloadContainer>
            </IconContext.Provider>
            
        </>
    )
}

export default Download
