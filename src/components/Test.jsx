import React from 'react'
import { useLocation } from 'react-router-dom'

const Test = () => {
    const location = useLocation()
    
    const values = location.state?.value;
    const filterMeals = () => {
        
    }
    return (
    <div>
        <h1>{location.state?.value}</h1>
    </div>
  )
}

export default Test