import React, {useState} from 'react'

import {Navbar, Footer, Sidebar} from '../'

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div>
                {children}
            </div>
            <Footer />   
        </>
    )
}

export default Layout
