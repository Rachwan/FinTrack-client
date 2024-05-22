import React from 'react'
import Header from '../layout/Header.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout