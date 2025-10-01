import React from 'react'
import RevenueChart from './RevenueChart'

const ChartSection = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-3'>
        <div>
            <RevenueChart/>
        </div>        
    </div>
  )
}

export default ChartSection