import React from 'react'
import Navbar from './Navbar'
import CreativeForm from '../components/CreativeForm'
const Creative = () => {
  return (
    <div>
     <div className='flex bg-white'>
     <div className='w-max bg-white h-screen sticky top-0'><Navbar/></div>
     <div className='text-white ml-4 w-full mr-4 mb-10 mt-4 '><CreativeForm/></div>
     </div>
    </div>
  )
}

export default Creative