import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
      <div className='sticky top-0 z-50 border-red-300'>
      <Navbar />
      </div>
        <Link href="/about"><button className='text-primary'>About</button></Link>
       <Link href="/"><button className='text-primary'>Home</button></Link>
      <p className='text-primary-dark'>This is Contact Page</p>
    </div>
  )
}

export default page
