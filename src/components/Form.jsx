import React from 'react'
import { frequencyData, incomeType } from '../Data'
import { FaArrowRight } from 'react-icons/fa';

const Form = ({setFormData,setIsForm, formData}) => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(formData.income && formData.type)setIsForm(false)
    }
  return (
    <form onSubmit={handleSubmit} className='p-4 w-full'>
        <div className='w-full flex flex-col mb-[40px]'>
            <label htmlFor='income' className='text-secondary mb-2'>
                What is your total income?
            </label>
            <input
                value={formData.income}
                onChange={(e)=>setFormData((p)=>({...p,income:e.target.value}))}
                name='income'
                className="w-full text-primary outline-none rounded-lg font-semibold text-lg border-secondary focus:border-primary hover:border-primary border-2 p-4"
            />
        </div>
        <div className='w-full flex flex-col mb-[40px]'>
            <label htmlFor='freq' className='text-secondary mb-2'>What is your pay frequency?</label>
            <select name='freq' className='w-full text-primary outline-none rounded-lg font-semibold text-lg border-secondary bg-white focus:border-primary hover:border-primary border-2 p-4'>
                {frequencyData.map((freq)=><option key={freq.id} onClick={(e)=>setFormData((p)=>({...p,frequency:e.target.value}))}>{freq.frequency}</option>)}
            </select>
        </div>
        <div className='w-full flex flex-col mb-[40px]'>
            <label htmlFor='type' className='text-secondary mb-2'>Your type of income?</label>
            <div name="type" className='flex w-full justify-between gap-8 text-lg font-semibold text-primary'>
                {incomeType.map(type=><div key={type.id} onClick={(_)=>setFormData(p=>({...p,type:type.type}))} 
                className={`${formData.type===type.type?'text-white bg-primary border-primary':'text-primary bg-white border-secondary'} w-full text-center hover:border-primary border-2  rounded-lg p-2 cursor-pointer transition duration-500`}
                >{type.type}</div>)}
            </div>
        </div>
        <button type='submit' className={`${formData.income && formData.type?'cursor-pointer':'cursor-not-allowed'} transition duration-300 w-full text-white bg-primary rounded-lg py-4 text-2xl font-semibold mb-[20px] flex items-center justify-center`}>Calculate <FaArrowRight className='ml-2'/></button>
    </form>
  )
}

export default Form