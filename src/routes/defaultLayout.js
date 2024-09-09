import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../commen/header'
import Footer from '../commen/footer'

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
