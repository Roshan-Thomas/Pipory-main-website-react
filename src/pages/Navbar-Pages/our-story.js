import React from 'react'
import {Layout} from '../../components'
import { PostContainer as Container, PostTitle as Title,MarkdownStyles } from '../../templates/postTemplate/TemplateElements'
import OurStoryText from '../../JSON/pages.json'
import styled from 'styled-components'

const OurStory = () => {
    return (
        <Layout>
            <Hero>
                One Random Phone Call...
            </Hero>
            <Container>
                <Title>Our Story</Title>
                <MarkdownStyles
                    source={OurStoryText[0].content}
                    escapeHtml={false}
                />
            </Container>
        </Layout>
    )
}

export default OurStory


const Hero = styled.div`
    background-color: #6200EE;
    height: 65vh;
    font-family: "Integral CF";
    color: #fff;
    font-size: 140px;
    font-weight: bold;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    padding-bottom: 20px;

    @media screen and (max-width: 768px) {
        font-size: 90px;
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 50px;
        height: 40vh;
        padding: 0 20px; 
        width: auto;
    }

    @media screen and (max-width: 300px) {
        font-size: 40px;
    }
`