import React from 'react'
import { Layout, HeroInfo } from '../../components'
import { careersHeroObj } from '../../components/HeroInfoSection/Data'

const Careers = () => {
    return (
        <Layout>
            <HeroInfo {...careersHeroObj} />
        </Layout>
    )
}

export default Careers
