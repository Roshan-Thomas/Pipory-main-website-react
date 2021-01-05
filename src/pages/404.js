import React from 'react'

import { HeroInfo, Layout } from '../components'
import {NotFoundPage} from '../components/HeroInfoSection/Data'

const ErrorPage = () => {


    return (
        <Layout>
            <HeroInfo {...NotFoundPage} />
        </Layout>
    )
}

export default ErrorPage
