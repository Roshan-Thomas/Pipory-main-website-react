import React from 'react'
import { Layout, HeroInfo } from '../../components'
import { careersHeroObj } from '../../components/HeroInfoSection/Data'
import { PostContainer, PostTitle, MarkdownStyles } from '../../templates/postTemplate/TemplateElements'
import WhatWeOffer from '../../JSON/pages.json'
import styled from 'styled-components'


const Careers = () => {
    return (
        <Layout>
            <HeroInfo {...careersHeroObj} />
            <CareerContainer>
                <CareerTitle>What We Offer</CareerTitle>
                <CareerWrapper>
                    <MarkdownCareerStyle
                    source={WhatWeOffer[1].content}
                    escapeHtml={false}
                    />
                </CareerWrapper>
            </CareerContainer>
        </Layout>
    )
}

export default Careers


const CareerContainer = styled(PostContainer)`
    margin: 0;
    background: #121212;
`

const CareerTitle = styled(PostTitle)`
    text-align: center;
    color: #fff;
`

const CareerWrapper = styled.div`
    margin: 0 150px;
    padding: 20px 0;
`

const MarkdownCareerStyle = styled(MarkdownStyles)`
    color: #fff;
    ul, ol {
		font-size: 25px;
	}
`