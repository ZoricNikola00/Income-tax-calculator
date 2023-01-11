import React, {useState}from 'react'

const App = () => {
    const [isForm,setIsForm]=useState(true)
    const [formData, setFormData]=useState({
        type:'',
        income:0,
        period:'Hourly'
    })
  return (
    <div>App</div>
  )
}

export default App