import React from 'react'
import HomePage from './home/page'
import Hero from '@/components/ui/Hero'
import Footer from '@/components/ui/Footer'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-bgcolor bg-grid-white/[0.1] relative flex items-center justify-center'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-bgcolor [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'>
      </div>
      <Hero/>
    </div>
    // <div className="w-full min-h-screen bg-bgcolor bg-grid-white/[0.1] relative flex flex-col ">
  
    //   <div className="flex items-center justify-center h-screen">
    //     <Hero />
    //   </div>

    //   <div className="flex-grow flex items-center justify-center bg-white text-black">
    //     <HomePage />
    //   </div>

    //   <footer className="bg-white dark:bg-gray-800 w-full py-8">
    //     <Footer/>
    //   </footer>

    //   <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bgcolor [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
    //   </div>
    // </div>
    
  )
}

export default Home
