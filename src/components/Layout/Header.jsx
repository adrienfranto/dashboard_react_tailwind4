import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun } from 'lucide-react'
import React from 'react'

const Header = ({oneToggle}) => {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
    border-slate-200/50 dark:border-b-slate-700/50 px-6 py-4 '>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Menu onClick={oneToggle} className='w-5 h-5 '/>
          </button>    

          <div className='hidden md:block'>
            <h1 className='text-2xl font-black text-slate-800 dark:text-white'>Dashboard</h1>
            <p>Welcome back , Adrien! Here's happening today</p>
          </div>
        </div>

        {/* Center */}
        <div className='flex-1 max-w-md mx-8'>
          <div className='relative'>
            <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'/>
            <input type="text" placeholder='Search Anything' className='w-full pl-10 pr-4 
            py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 
            dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2
             focus:ring-blue-500 focus:border-transparent transition-all' 
             />
             <button>
               <Filter className='absolute right-2 top-1/2 transform -translate-y-1/2 p-0.5 
               text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ' />
              
             </button>
          </div>      
        </div>
        {/* Right side */}
        <button className='flex items-center space-x-3'>
          {/* Quic Actions */
          <div className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r 
          from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all '>
            <Plus className='w-4 h-4'/>
            <span className='text-sm font-medium'>New</span>
          </div>
          }
      </button>

      {/* Toggle */}
      <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
      hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
        <Sun className='w-5 h-5'/>
      </button>

      {/* Notification */}
      <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
      hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
        <Bell className='w-5 h-5'/>
        <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs 
        rounded-full flex items-center justify-center'>3</span>
      </button>

      {/* Settings */}
      <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
      hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
        <Settings className='w-5 h-5 '/>
      </button>

      {/* User profile */}
      <div className='flex items-center space-x-3 pl-3 border-l border-slate-200 
      dark:border-slate-700'>
        <img 
            src="data:image/jpeg;base64,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" 
            alt="user"
           className='w-8 rounded-full ring-2 ring-blue-500' 
           />
          <div className='hidden md:block'>
            <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>Adrien Franto</p>
            <p className='text-xs text-slate-500 dark:bg-slate-400 '>Administrator</p>
          </div>
          <ChevronDown className='w-4 h-4 text-slate-400'/>
      </div>
      </div>

      
    </div>
  )
}

export default Header