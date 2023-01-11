import React, {useState}from 'react'
import { FaHouseUser } from 'react-icons/fa';

const App = () => {
    const [isForm,setIsForm]=useState(true)
    const [formData, setFormData]=useState({
        type:'',
        income:0,
        period:'Hourly'
    })
  return (
    <div className='mt-[50px] h-fit flex justify-center items-center flex-col'>
        <div className='customShadow text-primary mb-10 w-[90%] md:-[500px] lg:w-[600px] flex items-center justify-center p-4 bg-white rounded-lg'>
            <FaHouseUser className='text-3xl md:text-4xl'/>
            <h1 className='ml-3 font-bold text-xl md:text-2xl'>Income Tax Calculator</h1>
        </div>
    </div>
  )
}

export default App