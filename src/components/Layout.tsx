import React from 'react'
import Navbar from './Navbar'
type DashboardLayoutProps = {
  children: React.ReactNode,
};
const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout