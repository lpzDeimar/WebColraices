import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
