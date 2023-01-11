import React, { useEffect, useState } from 'react'
import { frequencyData } from '../Data'

const Details = ({formData}) => {
    const tax=0.4 //random tax
    const selectedIncome=+formData.income
    const [calculatedGrossIncome, setCaclulatedGrossIncome]=useState({
        Hourly:0,
        Daily:0,
        Weakly:0,
        Quarteryl:0,
        Monthly:0,
        Annualy:0
    })
    const calculation =()=>{
        let monthly=0;
        let quarterly=0
        let weakly=0;
        let daily=0
        let hourly=0
        let annualy=0
        if(formData.freq==='Annualy'){
            annualy=selectedIncome
            monthly=selectedIncome/12;
            quarterly=selectedIncome/4;
            weakly=selectedIncome/50;
            daily=monthly/20;
            hourly=daily/8;
        }
        if(formData.freq==='Monthly'){
            monthly=selectedIncome
            annualy=selectedIncome*12;
            quarterly=annualy/4;
            weakly=annualy/50;
            daily=selectedIncome/20;
            hourly=daily/8
        }
        if(formData.freq==='Quarterly'){
            quarterly=selectedIncome;
            annualy=quarterly*4;
            monthly=annualy/12
            weakly=annualy/50
            daily=monthly/20
            hourly=daily/8
        }
        if(formData.freq==='Weakly'){
            weakly=selectedIncome;
            annualy=weakly*50;
            monthly=annualy/12;
            quarterly=annualy/4;
            daily=monthly/20;
            hourly=daily/8
        }
        if(formData.freq='Daily'){
            daily=selectedIncome;
            monthly=daily*20;
            annualy=monthly*12
            quarterly=annualy/4
            weakly=annualy/50;
            hourly=daily/8
        }
        if(formData.freq='Hourly'){
            hourly=selectedIncome;
            daily=hourly*8
            weakly=daily*5;
            annualy=weakly*50
            monthly=annualy/12
            quarterly=annualy/4
        }
        setCaclulatedGrossIncome({
            Hourly:hourly,
            Daily:daily,
            Weakly:weakly,
            Quarterly:quarterly,
            Monthly:monthly,
            Annualy:annualy
        })
    }
    useEffect(()=>{
        calculation()
    }
    ,[])
    return (
    <div className='p-4 w-full text-center'>
        <h1 className='text-primary text-lg my-2 font-semibold'>
            Your Net {formData.freq} income is <br className='block md:hidden my-2'/>
            <span className='py-2 font-bold px-3 rounded-lg bg-primary text-white text-xl'>
                {Math.round(selectedIncome-selectedIncome*tax)}
            </span>
        </h1>
        <div className='w-full text-primary p-2 text-md font-semibold border-primary border-2 rounded-lg mt-10'>
            <div className='grid grid-cols-3 w-full text-secondary border-b-2 border-secondary'>
                <span className='col-span-1'>Period</span>
                <span className='col-span-1'>Gross Income</span>
                <span className='col-span-1'>Net Income</span>
            </div>
            {frequencyData.map(item=>{
            const income=+calculatedGrossIncome[item.frequency]
            return <div key={item.id} className='hover:bg-primary hover:text-white transition duration-300 py-2 my-2 w-full grid grid-cols-3 text-lg border-b-2 border-secondary'>
                <span className='col-span-1'>{item.frequency}</span>
                <span className='col-span-1'>
                    ${Math.round(income)}
                </span>
                <span className='col-span-1'>
                    ${Math.round(income- income*tax)}
                </span>
            </div>})}
        </div>
    </div>
  )
}

export default Details