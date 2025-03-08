import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <div className='grid-background'>

        </div>
        <main className='min-h-screen container'>
            <Header />
            <Outlet />
            <Footer />
        </main>
        
        {/* <div className='p-10 text-center bg-transparent text-white mt-10 '>All rights reserved @2025</div> */}
    </div>
  )
}

export default AppLayout
