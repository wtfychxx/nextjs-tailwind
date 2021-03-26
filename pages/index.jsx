import React from 'react';
import Switcher from '../components/darkmode/switcher';


export default function home(){
  return(
    <div className="antialiased flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">      
      <div className="w-5/12">
        <Switcher />
      </div>
    </div>
  )
}