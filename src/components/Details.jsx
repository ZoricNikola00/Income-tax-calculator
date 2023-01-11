import React, { useState } from 'react'

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

    return (
    <div>Details</div>
  )
}

export default Details