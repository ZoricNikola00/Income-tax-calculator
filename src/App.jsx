import React, {useState}from 'react'
import { FaCalculator } from 'react-icons/fa';
import Details from './components/Details';
import Form from './components/Form';

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
            <FaCalculator className='text-3xl md:text-4xl'/>
            <h1 className='ml-3 font-bold text-xl md:text-2xl'>Income Tax Calculator</h1>
        </div>
        <div className='w-[90%] md:-[500px] lg:w-[600px] flex-col h-auto bg-white rounded-lg customShadow'>
            <div className='flex w-full text-primary'>
                <div 
                onClick={(_)=>setIsForm(true)}
                className={`${isForm?"border-b-primary":'border-b-secondary'} cursor-pointer hover:bg-primary hover:text-white transition-all text-lg font-bold duration-500 w-full p-4 text-center border-b-[5px]  border-secondary rounded-tl-lg border-r`}>
                    Form Income
                </div>
                <div onClick={(_)=>{if(formData.income && formData.type)setIsForm(false)}} 
                    className={`${!isForm?'border-b-primary':'border-b-secondary'} ${formData.income && formData.type?'cursor-pointer':'cursor-not-allowed'} hover:bg-primary hover:text-white transition-all text-lg font-bold duration-500 w-full p-4 text-center border-b-[5px]  border-secondary rounded-tr-lg border-l`}>
                    Income Details
                </div>
            </div>
            <div className='w-full h-full'>
                {isForm?
                <Form
                    setIsForm={setIsForm}
                    formData={formData}
                    setFormData={setFormData}
                />
            :
                <Details 
                    formData={formData}
                />
            }
            </div>
        </div>
    </div>
  )
}

export default App