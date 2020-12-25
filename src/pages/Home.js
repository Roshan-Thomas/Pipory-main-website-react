import React, {useState} from 'react'

// Import Components

import { Navbar, Sidebar, Hero, Writing, Info, Features, Download, Footer } from '../components'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Writing />
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Info {...homeObjThree} />
            <Features />
            <Download />
            <Footer />
        </>
    )
}

export default Home
