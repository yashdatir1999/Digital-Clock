import React, { useState } from 'react'

const App = () => {
  let time = new Date().toLocaleTimeString()
  let date = new Date().toLocaleDateString()
  
  const [ctime, setctime] = useState(time)
  const [cdate, setcdate] = useState(date)
  
  const updateTime = ()=>{
    time = new Date().toLocaleTimeString()
    date = new Date().toLocaleDateString()
    setctime(time)
    setcdate(date)
  }
  setInterval(updateTime, 1000);
  return (
    <div className='h-screen w-full bg-black flex flex-col items-center justify-center'>
      <h1 className='text-blue-200 font-black  font-mono text-8xl'>{ctime}</h1> 
      <h1 className='text-white font-black font-mono text-5xl'>{cdate}</h1>
    </div>
  )
}

export default App