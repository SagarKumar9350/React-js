import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footerr'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout