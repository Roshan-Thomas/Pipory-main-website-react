import React from 'react'
import { Layout, Info, HeroInfo } from '../../components'
import { collabHeroObj } from '../../components/HeroInfoSection/Data'
import { collabObjOne } from '../../components/InfoSection/Data'

const Collab = () => {
    return (
        <Layout>
            <HeroInfo {...collabHeroObj} />
            <Info {...collabObjOne} />
        </Layout>
    )
}

export default Collab