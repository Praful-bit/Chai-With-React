// import React from 'react'
import Footer from './components/Footer/Footer'
import HeaderFile from './components/Header/HeaderFile'
import{Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
    <HeaderFile/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout