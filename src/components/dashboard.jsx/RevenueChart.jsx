import React from 'react'

const RevenueChart = () => {
  return (
    <div className='flex items-center justify-between bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl rounded-b-2xl
    border border-slate-200/50 dark:border-slate-700/50 p-6 '>
        <div className='flex flex-col items-start justify-between mb-6'>
            <h3 className='text-xl font-bold text-slate-800 dark:text-white'>
                Revenue Chart
            </h3>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Monthly Revenue and expenses</p>
        </div>
        <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 
                rounded-full '>                  
                </div>
                <div className='text-sm text-slate-600 dark:text-slate-400'>
                    <span>Revenu</span>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-600 
                rounded-full '>                  
                </div>
                <div className='text-sm text-slate-600 dark:text-slate-400'>
                    <span>Expenses</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RevenueChart