import React, { useEffect, useState } from 'react'

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
            Hourly:hourly.toFixed(2),
            Daily:daily.toFixed(2),
            Weakly:weakly.toFixed(2),
            Quarteryl:quarterly.toFixed(2),
            Monthly:monthly.toFixed(2),
            Annualy:annualy.toFixed(2)
        })
    }
    useEffect(()=>{
        calculation()
    }
    ,[])
    console.log(calculatedGrossIncome,formData.freq);
    return (
    <div>Details</div>
  )
}

export default Details