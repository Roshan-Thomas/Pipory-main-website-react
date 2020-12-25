import React, {useState} from 'react'

import { Navbar, Footer, Sidebar } from '../components'

const ErrorPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} /> 
            <h1>404 page</h1>
            <h2>Page does not Exist.</h2>
            <br />
            <br />
            <h2>In development</h2>
            <Footer />  
        </>
    )
}

export default ErrorPage
