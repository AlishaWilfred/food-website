import React from 'react'
import Footer from './Footer'
import Header from './Header'
// import { Children } from 'react/cjs/react.production.min'

export default function Layout({children}){
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}