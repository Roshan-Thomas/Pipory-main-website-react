import React from 'react'

import { HeroInfo, Layout } from '../components'
import {ComingSoonPage} from '../components/HeroInfoSection/Data'

const ComingSoon = () => {


    return (
        <Layout>
            <HeroInfo {...ComingSoonPage} />
        </Layout>
    )
}

export default ComingSoon
